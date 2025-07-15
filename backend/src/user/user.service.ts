import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private mailerService: MailerService,
  ) {}

  async create(user: { username: string; email: string }) {
    const createdUser = this.userRepo.create(user);
    const savedUser = await this.userRepo.save(createdUser);

    await this.sendWelcomeEmail(savedUser);

    return savedUser;
  }

  private async sendWelcomeEmail(user: User): Promise<void> {
    await this.mailerService.sendMail({
      to: user.email,
      from: 'noreply@example.com',
      subject: 'Welcome to our platform!',
      text: `Hello ${user.username}, welcome to our platform!`,
      template: 'welcome',
      context: {
        username: user.username,
      },
    });
  }
}

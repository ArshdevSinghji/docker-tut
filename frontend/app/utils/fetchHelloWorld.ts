export const fetchHelloWorld = async () => {
  try {
    const res = await fetch("http://localhost:3000", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.text();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

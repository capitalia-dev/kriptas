const server = Bun.serve({
  port: 3333,
  fetch() {
    return new Response(Bun.file(new URL("./index.html", import.meta.url).pathname));
  },
});

console.log(`kriptas → http://localhost:${server.port}`);

import Hello from "./components/hello";

export default function Home() {
  console.log("Hello from the Home component!");
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Welcome to Next.js!</h1>
      <Hello />
    </div>
  );
}

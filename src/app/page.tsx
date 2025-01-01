function Greeting({ name }: { name: string }) {
  return <h1 className="mx-auto">Hello, {name}</h1>;
}

export default function App() {
  return <div className="container justify-center">
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-med">
      <Greeting name="Friend" />
    </figure>
  </div>
}
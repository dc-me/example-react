import { useState } from "react";

export default function MovieSearchBar({ onSearch }) {
  const [form, setForm] = useState({
    t: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form.t);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        className="grow rounded-md border px-3 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
        type="text"
        name="t"
        value={form.t}
        onChange={handleChange}
      />
      <input
        className="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        type="submit"
        value="submit"
      />
    </form>
  );
}

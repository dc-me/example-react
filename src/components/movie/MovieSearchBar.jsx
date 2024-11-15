import { useState } from 'react';

export default function MovieSearchBar({ onSearch }) {
  const [form, setForm] = useState({
    t: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form.t);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="t" value={form.t} onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

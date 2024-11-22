import { getUser } from "../../lib/users";

export default function ChatPage() {
  const user = getUser();
  return (
    <div className="px-4 pt-10">
      <h1 className="text-center text-4xl font-extrabold text-red">
        Welcome, {user.name.firstName}
      </h1>
      <p className="mt-4 p-8 text-2xl">
        RTT 42 Rocks, but I don't have time to finished the chat.
      </p>
    </div>
  );
}

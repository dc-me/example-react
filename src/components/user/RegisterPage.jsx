import TextField from "../TextField";
import Button from "../Button";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 lg:p-20">
        <div>
          <h1 className="text-lg font-bold">Sign Up</h1>
          <p className="mt-2">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <form className="col-span-2 rounded-xl bg-white">
          <div className="mx-8 my-6 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-6">
            <TextField className="md:col-span-3" label="First name:" />
            <TextField className="md:col-span-3" label="Last name:" />
            <TextField className="md:col-span-2" label="Username:" />
            <TextField className="md:col-span-4" label="Email:" />
            <TextField className="md:col-span-3" label="Password:" />
            <TextField className="md:col-span-3" label="Confirm password:" />
          </div>
          <div className="mt-10 flex justify-end gap-4 border-t border-gray-300 p-4">
            <Button className="rounded-lg" variant="contained">
              Reset
            </Button>
            <Button className="rounded-lg" variant="contained">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

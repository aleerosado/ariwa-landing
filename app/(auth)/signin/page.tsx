export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <section className="relative flex min-h-screen items-center bg-surface-alt py-12 sm:py-16">
      <div className="w-full px-4 sm:px-6">
        <div className="mx-auto w-full rounded-3xl border border-[rgba(10,26,47,.08)] bg-white/90 px-6 py-10 shadow-[0_20px_60px_-30px_rgba(10,26,47,.4)] backdrop-blur-sm sm:px-10 md:py-14 lg:px-16">
          {/* Section header */}
          <div className="pb-10 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#F9F9F9,#D72638,#F5EFE6,#324A5F,#F9F9F9)] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Welcome back
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto w-full max-w-xl">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email"
                />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-sm text-gray-600 hover:underline"
                    href="/reset-password"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-linear-to-t from-rose-600 to-rose-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                Sign in
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">
                or
              </div>
              <button className="btn relative w-full bg-linear-to-b from-[#1A2E42] to-[#0A1A2F] bg-[length:100%_100%] bg-[bottom] text-gray-100 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,rgba(50,74,95,.65),rgba(10,26,47,.85),rgba(50,74,95,.65))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                Sign In with Google
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't you have an account?{" "}
            <Link className="font-medium text-brand-accent" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

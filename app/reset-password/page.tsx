export const metadata = {
  title: "Restablecer contraseña - Ariwa Labs",
  description: "Restablece el acceso a tu cuenta de Ariwa Labs.",
};

import AuthPageShell from "@/layout/auth-page-shell";

export default function ResetPassword() {
  return (
    <AuthPageShell>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#F9F9F9,#D72638,#F5EFE6,#324A5F,#F9F9F9)] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Restablece tu contraseña
              </h1>
            </div>
            {/* Contact form */}
            <form className="mx-auto max-w-[400px]">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div className="mt-6">
                <button className="btn w-full bg-linear-to-t from-rose-600 to-rose-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                  Restablecer contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </AuthPageShell>
  );
}

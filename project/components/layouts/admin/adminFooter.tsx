export default async function AdminFooter() {
  return (
    <footer className="w-full h-16 flex items-center justify-between px-4 bg-card text-sm shrink-0">
      <div className="w-[348px] h-full flex flex-col items-start justify-center">
        <p className="text-gray font-semibold">© 2025 BACK OFFICE</p>
        <p className="text-gray font-medium">
          CONTACT US : +82 10-6333-3996 (Republic of korea)
        </p>
      </div>
      <h1 className="font-eczar text-lg font-semibold">BACK OFFICE</h1>
      <div className="w-[348px] h-full flex items-center justify-end gap-4">
        <p className="text-gray font-semibold">Terms of Service</p>
        <p className="text-gray font-semibold">Privacy Policy</p>
      </div>
    </footer>
  );
}

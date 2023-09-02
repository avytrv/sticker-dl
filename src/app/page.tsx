import { DownloadForm } from "@/components/ui/download-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-4 px-6 pb-10 pt-20 text-2xl">
      <h1 className="mb-4 text-center text-6xl font-bold text-green-500">
        LINE Sticker Downloader
      </h1>

      <div className="flex flex-col items-center space-y-8">
        <p className="text-center">
          Go to the{" "}
          <a
            href="https://store.line.me/"
            className="clicked:bg-green-200 font-semibold uppercase text-green-500 underline underline-offset-4 hover:decoration-2 focus:outline-green-500 active:bg-green-100"
          >
            LINE Store
          </a>{" "}
          and paste the URL of the sticker pack you want to download.
        </p>
        <p className="text-center">
          <span className="font-semibold text-green-500">Note:</span> Android
          stickers are usually lower resolution than iPhone stickers and have
          only one default size.
        </p>
        <DownloadForm />
      </div>

      <footer>
        <p>
          Made with 💚 by{" "}
          <span className="font-semibold text-green-500">tnt_kitty</span>
        </p>
      </footer>
    </main>
  );
}

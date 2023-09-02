import { DownloadForm } from "@/components/ui/download-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-4 px-6 pb-10 pt-20 text-2xl">
      <h1 className="text-6xl text-center text-green-500 font-bold mb-4">
        LINE Sticker Downloader
      </h1>

      <div className="flex flex-col items-center space-y-8">
        <p className="text-center">
          Go to the{" "}
          <a
            href="https://store.line.me/"
            className="text-green-500 font-semibold uppercase underline underline-offset-4 hover:decoration-2 focus:outline-green-500 clicked:bg-green-200 active:bg-green-100"
          >
            LINE Store
          </a>{" "}
          and paste the URL of the sticker pack you want to download.
        </p>
        <p className="text-center">
          <span className="text-green-500 font-semibold">Note:</span> Android
          stickers are usually lower resolution than iPhone stickers and have
          only one default size.
        </p>
        <DownloadForm />
      </div>

      <footer>
        <p>
          Made with 💚 by{" "}
          <span className="text-green-500 font-semibold">tnt_kitty</span>
        </p>
      </footer>
    </main>
  );
}

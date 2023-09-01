import { DownloadForm } from "@/components/ui/download-form";

export default function Home() {  
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-4">
        <h1 className="text-3xl text-center text-green-500 font-bold">
          LINE Sticker Downloader
        </h1>
        <p className="text-lg text-center">
          Go to the <a href="https://store.line.me/" className="text-green-500 font-semibold uppercase underline underline-offset-4 hover:decoration-2 focus:outline-green-500 clicked:bg-green-200 active:bg-green-100">LINE Store</a> and paste the URL of the sticker pack you want to download.
        </p>
        <p className="text-center">
          <span className="text-green-500 font-semibold">Note:</span> Android stickers are usually lower resolution than iPhone stickers and have only one default size.
        </p>
        <DownloadForm />
        <footer>
          <p>
            Made with 💚 by <span className="text-green-500 font-semibold">tnt_kitty</span>
          </p>
        </footer>
      </main>
    </div>
  )
}
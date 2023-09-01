export async function GET(request: Request, { params }: { params: { id: string } }) {
    // TODO: Get sticker URL, target device, and size options from form
    const id = params.id;
    const filename = `${id}.zip`;
    // TODO: Add download URL for iPhone 1x and Android stickers
    const url = `http://dl.stickershop.line.naver.jp/products/0/0/1/${id}/iphone/stickerpack@2x.zip`;
    const response = await fetch(url);
    
    return new Response(response.body, {
        headers: {
            ...response.headers,
            "Content-Disposition": `attachment; filename="${filename}"`, 
        },
    });
}
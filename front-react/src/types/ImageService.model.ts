export type ImageService = () => {
    getListOfImages(page: number, limit: number): Promise<any>
    getPreviewListOfImages(): Promise<any>
}
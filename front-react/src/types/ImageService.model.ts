export type ImageService = () => {
    getServiceName(): string
    getBaseUrl(): string
    getListOfImages(page: number, limit: number): Promise<any>
    getPreviewListOfImages(): Promise<any>
}
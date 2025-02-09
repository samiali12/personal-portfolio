import imageUrlBuilder from '@sanity/image-url';
import { client } from '../sanity';

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => {
    return builder.image(source)
}
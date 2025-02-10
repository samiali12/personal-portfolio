import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'y7g92nps',
    dataset: 'production',
})
import {
  createClient,
  createPreviewSubscriptionHook,
  createPortableTextComponent,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: "6al1v3ul",
  dataset: "production",
  apiVersion: "v2021-10-21",
  //   change to true when for production
  useCdn: true,
};

// export const sanityClient = createClient({ config });
export const sanityClient = createClient(config);

// export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const PortableText = createPortableTextComponent({
//   ...config,
//   serializers: {},
// });

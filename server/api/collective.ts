import { DEFAULT_TTL, JSON_HEADERS } from "~/utils/common-consts";
import {
  API_LINK,
  COLLECTIVE_QUERY,
  DONATIONS_QUERY,
  formatCollective,
  formatDonators,
  OpenCollectiveData,
} from "~/utils/donators-tools";

const validTypes = ["collective", "donations"];

export default defineCachedEventHandler(
  async (event) => {
    const type = getQuery(event)["type"] as string;
    if (!type || !validTypes.includes(type)) return undefined;
    let data = (await $fetch(API_LINK, {
      method: "POST",
      headers: JSON_HEADERS,
      body: {
        query: type === "collective" ? COLLECTIVE_QUERY : DONATIONS_QUERY,
        data: {},
      },
    })) as OpenCollectiveData;
    return formatWrapper(data, type);
  },
  {
    name: "collective-info",
    maxAge: DEFAULT_TTL,
    getKey: (event) => {
      if (event.context.params) return event.context.params["type"];
      return "";
    },
  },
);

const formatWrapper = (data: any, type: string) => {
  switch (type) {
    case "collective":
      return formatCollective(data);
    case "donations":
      return formatDonators(data);
    default:
      throw new Error("What ?");
  }
};

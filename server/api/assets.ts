import { getAsset } from "blahaj-library";
import { formatApps } from "~/utils/apps-tools";
import { formatTiers } from "~/utils/tiers-tools";
import { formatTitles } from "~/utils/titles-tools";
import { formatUsers } from "~/utils/users-tools";
import { DEFAULT_TTL, JSON_HEADERS } from "~/utils/common-consts";

const validFileList = ["apps", "tiers", "titles", "users"];

export default defineCachedEventHandler(
  async (event) => {
    const file = getQuery(event)["file"] as string;
    if (!file || !validFileList.includes(file)) return "file :" + file;
    let data = await $fetch(getAsset(`json/${file}.json`), {
      headers: JSON_HEADERS,
    });
    return formatWrapper(data, file);
  },
  {
    maxAge: DEFAULT_TTL,
    name: `assets-getter`,
    getKey: (event) => {
      if (event.context.params) return event.context.params["file"];
      return "";
    },
  },
);

const formatWrapper = (data: any, file: string) => {
  switch (file) {
    case "apps":
      return formatApps(data);
    case "tiers":
      return formatTiers(data);
    case "titles":
      return formatTitles(data);
    case "users":
      return formatUsers(data);
    default:
      return undefined;
  }
};

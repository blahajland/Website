import sanitizeHtml from "sanitize-html";

interface AppDescriptor {
  color: string;
  img: string;
  title: string;
  desc: string;
  noDisplay?: boolean;
  yuno?: string;
}

interface AppsList {
  apps: Array<AppDescriptor>;
}

export const formatApps = (data: any): Array<AppDescriptor> => {
  if (!data) return [];
  let apps = (data as AppsList).apps.filter(
    (elem) => !("noDisplay" in elem && elem["noDisplay"]),
  );
  apps.forEach((e) => {
    e.desc = sanitizeHtml(e.desc);
  });
  return apps;
};

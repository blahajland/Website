export const API_LINK = "https://api.opencollective.com/graphql/v2";
export const PROJECT_SLUG = "blahajland";
export const ADMIN_NB = 3;
export const MAX_DONATORS = 8;

export const DONATIONS_QUERY = `
query Transactions {
    collective(slug: "${PROJECT_SLUG}") {
        members(limit: ${MAX_DONATORS + 3}) {
            nodes {
                tier {
                    name
                }
                account {
                    name
                    imageUrl
                }
                totalDonations {
                    value
                    currency
                }
            }
            totalCount
        }
    }
}
`;

export const COLLECTIVE_QUERY = `
query Transactions {
    collective(slug: "${PROJECT_SLUG}") {
        stats {
            balance {
                value
                currency
            }
        }
        imageUrl
        name
    }
}
`;

export interface CollectiveInfo {
  stats: {
    balance: {
      value: number;
      currency: string;
    };
  };
  imageUrl: string;
  name: string;
}

export interface DonatorsInfo {
  tier: {
    name: string;
  };
  account: {
    name: string;
    imageUrl: string;
  };
  totalDonations: {
    value: number;
    currency: string;
  };
}

export interface DonatorsList {
  totalCount: number;
  nodes: Array<DonatorsInfo>;
}

export interface CollectiveInfo {
  stats: {
    balance: {
      value: number;
      currency: string;
    };
  };
  imageUrl: string;
  name: string;
}

export interface OpenCollectiveData {
  data: {
    collective: { members: DonatorsList } & CollectiveInfo;
  };
}

export const formatDonators = (data: any) => {
  if (!data) return undefined;
  const collective = (data as OpenCollectiveData).data.collective;
  return {
    nodes: collective.members.nodes.filter((e: DonatorsInfo) => e.tier),
    totalCount: collective.members.totalCount - ADMIN_NB,
  } as DonatorsList;
};

export const formatCollective = (data: any) => {
  if (!data) return undefined;
  const collective = (data as OpenCollectiveData).data.collective;
  return collective as CollectiveInfo;
};

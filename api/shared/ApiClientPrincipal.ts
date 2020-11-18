export interface IClientPrincipal {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}

export function getApiClientPrincipal(req): IClientPrincipal {
  const header = req.headers['x-ms-client-principal'];
  if (!header) {
    return null;
  }
  const encoded = Buffer.from(header, 'base64');
  const decoded = encoded.toString('ascii');
  return JSON.parse(decoded);
}

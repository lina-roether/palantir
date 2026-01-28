const JOIN_SESSION_HOST = "https://palantir.lina-roether.dev/join/";

function createInviteLink(username: string, hostId: string): string {
	return JOIN_SESSION_HOST + btoa(`${username}:${hostId}`);
}

export { createInviteLink };

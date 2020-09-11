class Github {
  constructor() {
    this.client_id = "4c7e47b0fc2a43c3be04";
    this.client_secret = "9598f974008e930daf00d08eda99e8d4c70c18c8";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    console.log(user);
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repo = await repoResponse.json();

    return {
      profile,
      repo,
    };
  }
}

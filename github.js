class Github{
    constructor(){
        this.client_id = 'c5487e4f085bbda2ac69';
        this.client_secret = 'c1810ebb117f4be9ced8e00c01098e81b116b4f2';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&rsort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos = await repoResponse.json();
        const profile = await profileResponse.json();
        return {
            profile,
            repos
        };
    }




}
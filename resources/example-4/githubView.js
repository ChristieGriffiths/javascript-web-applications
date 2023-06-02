class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(data) {
    const repoDescription = document.querySelector('#repo-description');
    const nameDescription = document.querySelector('#repo-name');
    const imageURL = document.querySelector('#img');
    const descriptionInformation = document.createElement('div');
    descriptionInformation.textContent = data.description;
    descriptionInformation.className = 'api info';
    const nameInformation = document.createElement('div');
    nameInformation.textContent = data.full_name;
    nameInformation.className = 'api info';
    repoDescription.append(nameInformation);
    repoDescription.append(descriptionInformation);
    imageURL.src = data.organization.avatar_url;
  }
}

module.exports = GithubView;
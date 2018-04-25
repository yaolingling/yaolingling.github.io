---
layout: default
title: Move CI from Jenkins to Concourse
modal-id: 3
date: 2017-10-27
img: dev-summit-icon.png
icon: icons8.com-Adventures-48.png
alt: 
project-date:  2017 Oct.27
#client: Start Bootstrap
#category: Web Development
description: Since 2017 Oct.27,  RackHD project switches over to Concourse based pipelines for Pull Request quality gate testing and continuous delivery.<br/> When a PR is created, a RackHD Committer will first need to set the “run-test” label on the PR to allow the PR Quality Gate test runs.  A RackHD Committer will then need to review the PR.  Once the PR passes both the code review and the PR Quality gate tests, a RackHD Committer can then merge the PR to master. <br/> Once the PR has been merged to master the POST Merge Test will run.  Once the Post Merge Test passes, the new docker,  debian images will be posted to DockerHub and Bintray.<br/> For dependent PRs, “depends on: <PR Link>” needs to be included in the comments for each dependency on a new line. A link to the PR status will be posted to the PR status in github with details and log information. <a href="http://rackhd.readthedocs.io/en/latest/devguide/contributing.html#quality-gates-for-the-pull-requests"></a> is  updated to reflect these changes.<br/> At the same time, OVA/Vagrant packages release have be deprecated, but scripts are provided to help community to build images .

---

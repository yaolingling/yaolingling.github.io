---
layout: default
title: Move to Concourse 
modal-id: 4
date: 2017-10-27
img: 
icon: icons8.com-Remove-Property-64.png 
alt: 
project-date:  2017 Oct
#client: Start Bootstrap
#category: Web Development
description: Since 2017 Oct.27, RackHD switches over to Concourse based pipelines for pull request quality gate testing and continous delivery. When a PR is created, a RackHD committer will first need to set the run-test label on the PR to allow the PR quality gate test runs. A RackHD committer will then need to review the PR. Once the PR code reviews and PR gate test pass, a RackHD committer can merge the PR to master. Once the PR has been merged to master, the "Post Merge Test" will run. Once the "Post Merge Test" passes, the new docker, debian image will be posted to Dockerhub and bintray. <br/> For dependent PRs, "depends on: PR Link" needs to be included in the comments for each dependency on a new line. A link to the PR status will be posted to the PR status in github with details and log information.  

---

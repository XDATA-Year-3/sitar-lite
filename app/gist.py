from github3 import GitHub
import json
import os


g = GitHub(os.environ['GITHUB_USERNAME'], os.environ['GITHUB_PASSWORD'])


def run(id):
    return g.gist(id).as_dict()

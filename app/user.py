from github3 import GitHub
import json
import os


g = GitHub(os.environ['GITHUB_USERNAME'], os.environ['GITHUB_PASSWORD'])


def run(id):
    return [g.gist(gist.id).as_dict() for gist in g.gists_by(id)]

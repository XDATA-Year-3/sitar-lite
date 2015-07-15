from github3 import GitHub
import json


with open('../config.json') as config_file:
    config = json.load(config_file)
    g = GitHub(os.environ['GITHUB_USERNAME'], os.environ['GITHUB_PASSWORD'])


def run(id):
    return [g.gist(gist.id).as_dict() for gist in g.gists_by(id)]

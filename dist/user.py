from github3 import GitHub
import json


with open('../config.json') as config_file:
    config = json.load(config_file)
    g = GitHub(config['user'], config['password'])


def run(id):
    return [g.gist(gist.id).as_dict() for gist in g.gists_by(id)]

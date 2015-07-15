from github3 import GitHub
import json
import os


g = GitHub(os.environ['GITHUB_USERNAME'], os.environ['GITHUB_PASSWORD'])


def run(id):
    return g.gist(id).as_dict()

    # Resolve URLs
    # if 'vega.json' in gist['files']:
    #     spec = json.loads(gist['files']['vega.json']['content'])
    #     if 'data' in spec:
    #         for d in spec['data']:
    #             if 'url' in d:
    #                 if d['url'].startswith('http'):
    #                     d['values'] = requests.get(d['url']).json()
    #                     del d['url']
    #                 else:
    #                     if d['url'] in gist['files']:
    #                         d['values'] = json.loads(gist['files'][d['url']]['content'])
    #                         del d['url']
    #     gist['files']['vega.json']['content'] = json.dumps(spec)

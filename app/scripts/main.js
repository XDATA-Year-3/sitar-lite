(function (Backbone, d3, vg) {
    'use strict';

    var router = new Backbone.Router();

    function renderVega(data) {
        var vegaFile = data.files['vega.json'],
            that = this,
            spec;
        if (vegaFile) {
            spec = JSON.parse(vegaFile.content);
            if (spec.data) {
                spec.data.forEach(function (d) {
                    if (data.files[d.url]) {
                        d.values = JSON.parse(data.files[d.url].content);
                        delete d.url;
                    }
                });
            }
            vg.parse.spec(spec, function (chart) {
                chart({el: that}).update();
            });
        }
    }

    function renderGist(user, gist) {
        var breadcrumb = d3.select('.navigation');
        breadcrumb.selectAll('*').remove();
        breadcrumb.append('a')
            .text(user)
            .attr('href', '#' + user);
        breadcrumb.append('span').text(' / ');
        breadcrumb.append('span').text(gist);

        d3.json('gist/' + gist, function (error, data) {
            var gistDiv = d3.select('.vis').append('div');
            gistDiv.append('h2').text(data.description);
            gistDiv.append('div').data([data]).each(renderVega);
            gistDiv.append('hr');
        });
    }

    function renderUser(user) {
        var breadcrumb = d3.select('.navigation');
        breadcrumb.selectAll('*').remove();
        breadcrumb.append('span')
            .text(user);

        d3.json('user/' + user, function (error, data) {
            var gistDivs = d3.select('.vis').selectAll('div')
                .data(data).enter().append('div');
            gistDivs.append('a').attr('href', function (d) {
                return '#' + user + '/' + d.id;
            })
            .append('h2').text(function (d) {
                return d.description;
            });
            gistDivs.append('div').each(renderVega);
            gistDivs.append('hr');
        });
    }

    router.route(':user', 'user', function (user) {
        d3.select('.vis').selectAll('div').remove();
        renderUser(user);
    });

    router.route(':user/:gist', 'user', function (user, gist) {
        d3.select('.vis').selectAll('div').remove();
        renderGist(user, gist);
    });

    Backbone.history.start();
}(window.Backbone, window.d3, window.vg));

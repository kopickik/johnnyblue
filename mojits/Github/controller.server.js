/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Github', function(Y, NAME) {

/**
 * The Github module.
 *
 * @module Github
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            var model = ac.models.get('model');
            Y.log(model);
            model.getData(function(err, data) {
                Y.log("Github-index-model.getData:");
                if (err) {
                    ac.error(err);
                    return;
                }
                Y.log(data);
                var view = ac.params.getFromUrl('view') || 'index';
                Y.log(view);
                if (view === 'custom' ){
                    ac.assets.addCss('./custom.css', 'top');
                } else if (view != 'index') {
                    view = 'index';
                }
                ac.done({
                    title: "KHK - YUI/Mojito Developer Dashboard",
                    github: data
                }, view);
            });
        }

    };

}, '0.0.1', {requires: ['mojito',
'mojito-assets-addon',
'mojito-models-addon',
'mojito-config-addon',
'mojito-params-addon']});

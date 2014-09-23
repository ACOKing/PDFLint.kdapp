/* Compiled by kdc on Tue Sep 23 2014 15:34:24 GMT+0000 (UTC) */
(function() {
/* KDAPP STARTS */
/* BLOCK STARTS: /home/archervmperidot/Applications/PDFLint.kdapp/index.coffee */
var PdflintController, PdflintMainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

PdflintMainView = (function(_super) {
  __extends(PdflintMainView, _super);

  function PdflintMainView(options, data) {
    if (options == null) {
      options = {};
    }
    options.cssClass = 'pdflint main-view';
    PdflintMainView.__super__.constructor.call(this, options, data);
  }

  PdflintMainView.prototype.viewAppended = function() {
    this.addSubView(new KDView({
      partial: "Welcome to Pdflint app!",
      cssClass: "welcome-view"
    }));
    return this.addSubView(new KDButtonView({
      title: ' Goto PDFLint',
      callback: function() {
        return location.assign('http://vm-0.archervmperidot.kd.io/PDFLint');
      }
    }));
  };

  return PdflintMainView;

})(KDView);

PdflintController = (function(_super) {
  __extends(PdflintController, _super);

  function PdflintController(options, data) {
    if (options == null) {
      options = {};
    }
    options.view = new PdflintMainView;
    options.appInfo = {
      name: "Pdflint",
      type: "application"
    };
    PdflintController.__super__.constructor.call(this, options, data);
  }

  return PdflintController;

})(AppController);

(function() {
  var view;
  if (typeof appView !== "undefined" && appView !== null) {
    view = new PdflintMainView;
    return appView.addSubView(view);
  } else {
    return KD.registerAppClass(PdflintController, {
      name: "Pdflint",
      routes: {
        "/:name?/Pdflint": null,
        "/:name?/archervmperidot/Apps/Pdflint": null
      },
      dockPath: "/archervmperidot/Apps/Pdflint",
      behavior: "application"
    });
  }
})();

/* KDAPP ENDS */
}).call();
'use strict';

describe('Service: GGRedditService', function () {

  // load the service's module
  beforeEach(module('whichSubApp'));

  // instantiate service
  var GGRedditService;
  beforeEach(inject(function (_GGRedditService_) {
    GGRedditService = _GGRedditService_;
  }));

  it('should do something', function () {
    expect(!!GGRedditService).toBe(true);
  });

});

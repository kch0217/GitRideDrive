(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Member
 * @header lbServices.Member
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Member` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Member",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Members/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__findById__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__updateById__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.owns.findById() instead.
        "prototype$__findById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.destroyById() instead.
        "prototype$__destroyById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.owns.updateById() instead.
        "prototype$__updateById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.requests.findById() instead.
        "prototype$__findById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.requests.destroyById() instead.
        "prototype$__destroyById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.requests.updateById() instead.
        "prototype$__updateById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__get__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries accessTokens of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Members/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__create__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Members/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__delete__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Members/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$__count__accessTokens
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Counts accessTokens of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Members/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Member.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/Members/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Member.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/Members/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Member.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/Members/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Member.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/Members/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Member.owns() instead.
        "prototype$__get__owns": {
          isArray: true,
          url: urlBase + "/Members/:id/owns",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.create() instead.
        "prototype$__create__owns": {
          url: urlBase + "/Members/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Member.owns.destroyAll() instead.
        "prototype$__delete__owns": {
          url: urlBase + "/Members/:id/owns",
          method: "DELETE"
        },

        // INTERNAL. Use Member.owns.count() instead.
        "prototype$__count__owns": {
          url: urlBase + "/Members/:id/owns/count",
          method: "GET"
        },

        // INTERNAL. Use Member.requests() instead.
        "prototype$__get__requests": {
          isArray: true,
          url: urlBase + "/Members/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Member.requests.create() instead.
        "prototype$__create__requests": {
          url: urlBase + "/Members/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Member.requests.destroyAll() instead.
        "prototype$__delete__requests": {
          url: urlBase + "/Members/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Member.requests.count() instead.
        "prototype$__count__requests": {
          url: urlBase + "/Members/:id/requests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#create
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Members",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#createMany
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Members",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#upsert
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Members",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#exists
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Members/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#findById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Members/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#find
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Members",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#findOne
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Members/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#updateAll
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Members/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#deleteById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Members/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#count
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Members/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#prototype$updateAttributes
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Members/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#createChangeStream
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Members/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#login
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Members/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#logout
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Members/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#confirm
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Members/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#resetPassword
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Members/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#validationandregister
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "validationandregister": {
          url: urlBase + "/Members/validationandregister",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#updateVehicle
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "updateVehicle": {
          url: urlBase + "/Members/updateVehicle",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#updatePw
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "updatePw": {
          url: urlBase + "/Members/updatePw",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#updateToken
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{object=}` - 
         */
        "updateToken": {
          url: urlBase + "/Members/updateToken",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#resetPw
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "resetPw": {
          url: urlBase + "/Members/resetPw",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#adminDisplay
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{object=}` - 
         */
        "adminDisplay": {
          url: urlBase + "/Members/adminDisplay",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#adminChange
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "adminChange": {
          url: urlBase + "/Members/adminDisplay",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#adminAddVehicle
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "adminAddVehicle": {
          url: urlBase + "/Members/adminAddVehicle",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#adminMassImport
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "adminMassImport": {
          url: urlBase + "/Members/adminMassImport",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#getGenderPreference
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{boolean=}` - 
         */
        "getGenderPreference": {
          url: urlBase + "/Members/getGenderPreference",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#setGenderPreference
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "setGenderPreference": {
          url: urlBase + "/Members/setGenderPreference",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#register
         * @methodOf lbServices.Member
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{object=}` - 
         */
        "register": {
          url: urlBase + "/Members/register",
          method: "POST"
        },

        // INTERNAL. Use Ride.member() instead.
        "::get::Ride::member": {
          url: urlBase + "/Rides/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Own.member() instead.
        "::get::Own::member": {
          url: urlBase + "/Owns/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Request.member() instead.
        "::get::request::member": {
          url: urlBase + "/requests/:id/member",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.member() instead.
        "::get::OfferQueue::member": {
          url: urlBase + "/OfferQueues/:id/member",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.member() instead.
        "::get::RequestQueue::member": {
          url: urlBase + "/RequestQueues/:id/member",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Member#getCurrent
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Members" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Member#updateOrCreate
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Member#update
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Member#destroyById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Member#removeById
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Member#getCachedCurrent
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Member#login} or
         * {@link lbServices.Member#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Member instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Member#isAuthenticated
         * @methodOf lbServices.Member
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Member#getCurrentId
         * @methodOf lbServices.Member
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Member#modelName
    * @propertyOf lbServices.Member
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Member`.
    */
    R.modelName = "Member";

    /**
     * @ngdoc object
     * @name lbServices.Member.rides
     * @header lbServices.Member.rides
     * @object
     * @description
     *
     * The object `Member.rides` groups methods
     * manipulating `Ride` instances related to `Member`.
     *
     * Call {@link lbServices.Member#rides Member.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#rides
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries rides of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#count
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Counts rides of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#create
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#createMany
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#destroyAll
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#destroyById
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#findById
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::Member::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.rides#updateById
         * @methodOf lbServices.Member.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::Member::rides"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Member.owns
     * @header lbServices.Member.owns
     * @object
     * @description
     *
     * The object `Member.owns` groups methods
     * manipulating `Own` instances related to `Member`.
     *
     * Call {@link lbServices.Member#owns Member.owns()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#owns
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries owns of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::get::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#count
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Counts owns of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.owns.count = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::count::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#create
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Creates a new instance in owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.create = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::create::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#createMany
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Creates a new instance in owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.createMany = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::createMany::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#destroyAll
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Deletes all owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owns.destroyAll = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::delete::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#destroyById
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Delete a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owns.destroyById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::destroyById::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#findById
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Find a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.findById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::findById::Member::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.owns#updateById
         * @methodOf lbServices.Member.owns
         *
         * @description
         *
         * Update a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.updateById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::updateById::Member::owns"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Member.requests
     * @header lbServices.Member.requests
     * @object
     * @description
     *
     * The object `Member.requests` groups methods
     * manipulating `Request` instances related to `Member`.
     *
     * Call {@link lbServices.Member#requests Member.requests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Member#requests
         * @methodOf lbServices.Member
         *
         * @description
         *
         * Queries requests of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#count
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Counts requests of Member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.requests.count = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::count::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#create
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.create = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::create::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#createMany
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.createMany = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::createMany::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#destroyAll
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Deletes all requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyAll = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::delete::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#destroyById
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Delete a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::destroyById::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#findById
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Find a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.findById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::findById::Member::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Member.requests#updateById
         * @methodOf lbServices.Member.requests
         *
         * @description
         *
         * Update a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.updateById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::updateById::Member::requests"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Vehicle
 * @header lbServices.Vehicle
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Vehicle` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Vehicle",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Vehicles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Vehicle.owns.findById() instead.
        "prototype$__findById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.destroyById() instead.
        "prototype$__destroyById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.owns.updateById() instead.
        "prototype$__updateById__owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vehicle.owns() instead.
        "prototype$__get__owns": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/owns",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.create() instead.
        "prototype$__create__owns": {
          url: urlBase + "/Vehicles/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.owns.destroyAll() instead.
        "prototype$__delete__owns": {
          url: urlBase + "/Vehicles/:id/owns",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.owns.count() instead.
        "prototype$__count__owns": {
          url: urlBase + "/Vehicles/:id/owns/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#create
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Vehicles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#createMany
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Vehicles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#upsert
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Vehicles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#exists
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Vehicles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#findById
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Vehicles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#find
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Vehicles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#findOne
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Vehicles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#updateAll
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Vehicles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#deleteById
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Vehicles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#count
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Vehicles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#prototype$updateAttributes
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Vehicles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#createChangeStream
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Vehicles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Own.vehicle() instead.
        "::get::Own::vehicle": {
          url: urlBase + "/Owns/:id/vehicle",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Vehicle#updateOrCreate
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#update
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#destroyById
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Vehicle#removeById
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Vehicle#modelName
    * @propertyOf lbServices.Vehicle
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Vehicle`.
    */
    R.modelName = "Vehicle";

    /**
     * @ngdoc object
     * @name lbServices.Vehicle.owns
     * @header lbServices.Vehicle.owns
     * @object
     * @description
     *
     * The object `Vehicle.owns` groups methods
     * manipulating `Own` instances related to `Vehicle`.
     *
     * Call {@link lbServices.Vehicle#owns Vehicle.owns()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Vehicle#owns
         * @methodOf lbServices.Vehicle
         *
         * @description
         *
         * Queries owns of Vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::get::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#count
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Counts owns of Vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.owns.count = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::count::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#create
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Creates a new instance in owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.create = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::create::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#createMany
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Creates a new instance in owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.createMany = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::createMany::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#destroyAll
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Deletes all owns of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owns.destroyAll = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::delete::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#destroyById
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Delete a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owns.destroyById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::destroyById::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#findById
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Find a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.findById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::findById::Vehicle::owns"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Vehicle.owns#updateById
         * @methodOf lbServices.Vehicle.owns
         *
         * @description
         *
         * Update a related item by id for owns.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owns
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.owns.updateById = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::updateById::Vehicle::owns"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Ride
 * @header lbServices.Ride
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Ride` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Ride",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Rides/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Ride.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/Rides/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Ride.own() instead.
        "prototype$__get__own": {
          url: urlBase + "/Rides/:id/own",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.findById() instead.
        "prototype$__findById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.destroyById() instead.
        "prototype$__destroyById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.joins.updateById() instead.
        "prototype$__updateById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.pickup() instead.
        "prototype$__get__pickup": {
          url: urlBase + "/Rides/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use Ride.destination() instead.
        "prototype$__get__destination": {
          url: urlBase + "/Rides/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use Ride.offerQueue.findById() instead.
        "prototype$__findById__offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/offerQueue/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.offerQueue.destroyById() instead.
        "prototype$__destroyById__offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/offerQueue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.offerQueue.updateById() instead.
        "prototype$__updateById__offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/offerQueue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.matchedSeat.findById() instead.
        "prototype$__findById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/matchedSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.matchedSeat.destroyById() instead.
        "prototype$__destroyById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/matchedSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.matchedSeat.updateById() instead.
        "prototype$__updateById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/matchedSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.pendingSeat.findById() instead.
        "prototype$__findById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/pendingSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.pendingSeat.destroyById() instead.
        "prototype$__destroyById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/pendingSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.pendingSeat.updateById() instead.
        "prototype$__updateById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/pendingSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.joins() instead.
        "prototype$__get__joins": {
          isArray: true,
          url: urlBase + "/Rides/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.create() instead.
        "prototype$__create__joins": {
          url: urlBase + "/Rides/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Ride.joins.destroyAll() instead.
        "prototype$__delete__joins": {
          url: urlBase + "/Rides/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.joins.count() instead.
        "prototype$__count__joins": {
          url: urlBase + "/Rides/:id/joins/count",
          method: "GET"
        },

        // INTERNAL. Use Ride.offerQueue() instead.
        "prototype$__get__offerQueue": {
          isArray: true,
          url: urlBase + "/Rides/:id/offerQueue",
          method: "GET"
        },

        // INTERNAL. Use Ride.offerQueue.create() instead.
        "prototype$__create__offerQueue": {
          url: urlBase + "/Rides/:id/offerQueue",
          method: "POST"
        },

        // INTERNAL. Use Ride.offerQueue.destroyAll() instead.
        "prototype$__delete__offerQueue": {
          url: urlBase + "/Rides/:id/offerQueue",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.offerQueue.count() instead.
        "prototype$__count__offerQueue": {
          url: urlBase + "/Rides/:id/offerQueue/count",
          method: "GET"
        },

        // INTERNAL. Use Ride.matchedSeat() instead.
        "prototype$__get__matchedSeat": {
          isArray: true,
          url: urlBase + "/Rides/:id/matchedSeat",
          method: "GET"
        },

        // INTERNAL. Use Ride.matchedSeat.create() instead.
        "prototype$__create__matchedSeat": {
          url: urlBase + "/Rides/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use Ride.matchedSeat.destroyAll() instead.
        "prototype$__delete__matchedSeat": {
          url: urlBase + "/Rides/:id/matchedSeat",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.matchedSeat.count() instead.
        "prototype$__count__matchedSeat": {
          url: urlBase + "/Rides/:id/matchedSeat/count",
          method: "GET"
        },

        // INTERNAL. Use Ride.pendingSeat() instead.
        "prototype$__get__pendingSeat": {
          isArray: true,
          url: urlBase + "/Rides/:id/pendingSeat",
          method: "GET"
        },

        // INTERNAL. Use Ride.pendingSeat.create() instead.
        "prototype$__create__pendingSeat": {
          url: urlBase + "/Rides/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use Ride.pendingSeat.destroyAll() instead.
        "prototype$__delete__pendingSeat": {
          url: urlBase + "/Rides/:id/pendingSeat",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.pendingSeat.count() instead.
        "prototype$__count__pendingSeat": {
          url: urlBase + "/Rides/:id/pendingSeat/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#create
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Rides",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#createMany
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Rides",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#upsert
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Rides",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#exists
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Rides/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#findById
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Rides/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#find
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Rides",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#findOne
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Rides/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#updateAll
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Rides/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#deleteById
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Rides/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#count
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Rides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#prototype$updateAttributes
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Rides/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#createChangeStream
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Rides/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#push
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "push": {
          url: urlBase + "/Rides/push",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ride#addRide
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{object=}` - 
         */
        "addRide": {
          url: urlBase + "/Rides/addRide",
          method: "POST"
        },

        // INTERNAL. Use Member.rides.findById() instead.
        "::findById::Member::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.rides.destroyById() instead.
        "::destroyById::Member::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.rides.updateById() instead.
        "::updateById::Member::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.rides() instead.
        "::get::Member::rides": {
          isArray: true,
          url: urlBase + "/Members/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Member.rides.create() instead.
        "::create::Member::rides": {
          url: urlBase + "/Members/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Member.rides.createMany() instead.
        "::createMany::Member::rides": {
          isArray: true,
          url: urlBase + "/Members/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Member.rides.destroyAll() instead.
        "::delete::Member::rides": {
          url: urlBase + "/Members/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Member.rides.count() instead.
        "::count::Member::rides": {
          url: urlBase + "/Members/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.findById() instead.
        "::findById::Own::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.destroyById() instead.
        "::destroyById::Own::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Own.rides.updateById() instead.
        "::updateById::Own::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Own.rides() instead.
        "::get::Own::rides": {
          isArray: true,
          url: urlBase + "/Owns/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.create() instead.
        "::create::Own::rides": {
          url: urlBase + "/Owns/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Own.rides.createMany() instead.
        "::createMany::Own::rides": {
          isArray: true,
          url: urlBase + "/Owns/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Own.rides.destroyAll() instead.
        "::delete::Own::rides": {
          url: urlBase + "/Owns/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Own.rides.count() instead.
        "::count::Own::rides": {
          url: urlBase + "/Owns/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Join.ride() instead.
        "::get::Join::ride": {
          url: urlBase + "/Joins/:id/ride",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.findById() instead.
        "::findById::pickup::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.destroyById() instead.
        "::destroyById::pickup::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.rides.updateById() instead.
        "::updateById::pickup::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pickup.rides() instead.
        "::get::pickup::rides": {
          isArray: true,
          url: urlBase + "/pickups/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.create() instead.
        "::create::pickup::rides": {
          url: urlBase + "/pickups/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Pickup.rides.createMany() instead.
        "::createMany::pickup::rides": {
          isArray: true,
          url: urlBase + "/pickups/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Pickup.rides.destroyAll() instead.
        "::delete::pickup::rides": {
          url: urlBase + "/pickups/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.rides.count() instead.
        "::count::pickup::rides": {
          url: urlBase + "/pickups/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.findById() instead.
        "::findById::destination::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.destroyById() instead.
        "::destroyById::destination::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.rides.updateById() instead.
        "::updateById::destination::rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Destination.rides() instead.
        "::get::destination::rides": {
          isArray: true,
          url: urlBase + "/destinations/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.create() instead.
        "::create::destination::rides": {
          url: urlBase + "/destinations/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Destination.rides.createMany() instead.
        "::createMany::destination::rides": {
          isArray: true,
          url: urlBase + "/destinations/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Destination.rides.destroyAll() instead.
        "::delete::destination::rides": {
          url: urlBase + "/destinations/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.rides.count() instead.
        "::count::destination::rides": {
          url: urlBase + "/destinations/:id/rides/count",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.ride() instead.
        "::get::OfferQueue::ride": {
          url: urlBase + "/OfferQueues/:id/ride",
          method: "GET"
        },

        // INTERNAL. Use MatchedSeat.ride() instead.
        "::get::MatchedSeat::ride": {
          url: urlBase + "/MatchedSeats/:id/ride",
          method: "GET"
        },

        // INTERNAL. Use PendingSeat.ride() instead.
        "::get::PendingSeat::ride": {
          url: urlBase + "/PendingSeats/:id/ride",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Ride#updateOrCreate
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Ride#update
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Ride#destroyById
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Ride#removeById
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Ride#modelName
    * @propertyOf lbServices.Ride
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Ride`.
    */
    R.modelName = "Ride";


        /**
         * @ngdoc method
         * @name lbServices.Ride#member
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::Ride::member"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride#own
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation own.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.own = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::get::Ride::own"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Ride.joins
     * @header lbServices.Ride.joins
     * @object
     * @description
     *
     * The object `Ride.joins` groups methods
     * manipulating `Join` instances related to `Ride`.
     *
     * Call {@link lbServices.Ride#joins Ride.joins()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Ride#joins
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Queries joins of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::get::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#count
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Counts joins of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.joins.count = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::count::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#create
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.create = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::create::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#createMany
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.createMany = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::createMany::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#destroyAll
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Deletes all joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyAll = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::delete::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#destroyById
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Delete a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::destroyById::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#findById
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Find a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.findById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::findById::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.joins#updateById
         * @methodOf lbServices.Ride.joins
         *
         * @description
         *
         * Update a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.updateById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::updateById::Ride::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride#pickup
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R.pickup = function() {
          var TargetResource = $injector.get("Pickup");
          var action = TargetResource["::get::Ride::pickup"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride#destination
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Fetches belongsTo relation destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R.destination = function() {
          var TargetResource = $injector.get("Destination");
          var action = TargetResource["::get::Ride::destination"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Ride.offerQueue
     * @header lbServices.Ride.offerQueue
     * @object
     * @description
     *
     * The object `Ride.offerQueue` groups methods
     * manipulating `OfferQueue` instances related to `Ride`.
     *
     * Call {@link lbServices.Ride#offerQueue Ride.offerQueue()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Ride#offerQueue
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Queries offerQueue of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::get::Ride::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.offerQueue#count
         * @methodOf lbServices.Ride.offerQueue
         *
         * @description
         *
         * Counts offerQueue of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.offerQueue.count = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::count::Ride::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.offerQueue#create
         * @methodOf lbServices.Ride.offerQueue
         *
         * @description
         *
         * Creates a new instance in offerQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue.create = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::create::Ride::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.offerQueue#createMany
         * @methodOf lbServices.Ride.offerQueue
         *
         * @description
         *
         * Creates a new instance in offerQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue.createMany = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::createMany::Ride::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.offerQueue#destroyAll
         * @methodOf lbServices.Ride.offerQueue
         *
         * @description
         *
         * Deletes all offerQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offerQueue.destroyAll = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::delete::Ride::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.offerQueue#destroyById
         * @methodOf lbServices.Ride.offerQueue
         *
         * @description
         *
         * Delete a related item by id for offerQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offerQueue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offerQueue.destroyById = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::destroyById::Ride::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.offerQueue#findById
         * @methodOf lbServices.Ride.offerQueue
         *
         * @description
         *
         * Find a related item by id for offerQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offerQueue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue.findById = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::findById::Ride::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.offerQueue#updateById
         * @methodOf lbServices.Ride.offerQueue
         *
         * @description
         *
         * Update a related item by id for offerQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offerQueue
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue.updateById = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::updateById::Ride::offerQueue"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Ride.matchedSeat
     * @header lbServices.Ride.matchedSeat
     * @object
     * @description
     *
     * The object `Ride.matchedSeat` groups methods
     * manipulating `MatchedSeat` instances related to `Ride`.
     *
     * Call {@link lbServices.Ride#matchedSeat Ride.matchedSeat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Ride#matchedSeat
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Queries matchedSeat of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::get::Ride::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.matchedSeat#count
         * @methodOf lbServices.Ride.matchedSeat
         *
         * @description
         *
         * Counts matchedSeat of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.matchedSeat.count = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::count::Ride::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.matchedSeat#create
         * @methodOf lbServices.Ride.matchedSeat
         *
         * @description
         *
         * Creates a new instance in matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.create = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::create::Ride::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.matchedSeat#createMany
         * @methodOf lbServices.Ride.matchedSeat
         *
         * @description
         *
         * Creates a new instance in matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.createMany = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::createMany::Ride::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.matchedSeat#destroyAll
         * @methodOf lbServices.Ride.matchedSeat
         *
         * @description
         *
         * Deletes all matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.matchedSeat.destroyAll = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::delete::Ride::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.matchedSeat#destroyById
         * @methodOf lbServices.Ride.matchedSeat
         *
         * @description
         *
         * Delete a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.matchedSeat.destroyById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::destroyById::Ride::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.matchedSeat#findById
         * @methodOf lbServices.Ride.matchedSeat
         *
         * @description
         *
         * Find a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.findById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::findById::Ride::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.matchedSeat#updateById
         * @methodOf lbServices.Ride.matchedSeat
         *
         * @description
         *
         * Update a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.updateById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::updateById::Ride::matchedSeat"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Ride.pendingSeat
     * @header lbServices.Ride.pendingSeat
     * @object
     * @description
     *
     * The object `Ride.pendingSeat` groups methods
     * manipulating `PendingSeat` instances related to `Ride`.
     *
     * Call {@link lbServices.Ride#pendingSeat Ride.pendingSeat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Ride#pendingSeat
         * @methodOf lbServices.Ride
         *
         * @description
         *
         * Queries pendingSeat of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::get::Ride::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.pendingSeat#count
         * @methodOf lbServices.Ride.pendingSeat
         *
         * @description
         *
         * Counts pendingSeat of Ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.pendingSeat.count = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::count::Ride::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.pendingSeat#create
         * @methodOf lbServices.Ride.pendingSeat
         *
         * @description
         *
         * Creates a new instance in pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.create = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::create::Ride::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.pendingSeat#createMany
         * @methodOf lbServices.Ride.pendingSeat
         *
         * @description
         *
         * Creates a new instance in pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.createMany = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::createMany::Ride::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.pendingSeat#destroyAll
         * @methodOf lbServices.Ride.pendingSeat
         *
         * @description
         *
         * Deletes all pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendingSeat.destroyAll = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::delete::Ride::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.pendingSeat#destroyById
         * @methodOf lbServices.Ride.pendingSeat
         *
         * @description
         *
         * Delete a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendingSeat.destroyById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::destroyById::Ride::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.pendingSeat#findById
         * @methodOf lbServices.Ride.pendingSeat
         *
         * @description
         *
         * Find a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.findById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::findById::Ride::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Ride.pendingSeat#updateById
         * @methodOf lbServices.Ride.pendingSeat
         *
         * @description
         *
         * Update a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.updateById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::updateById::Ride::pendingSeat"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Own
 * @header lbServices.Own
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Own` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Own",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Owns/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Own.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/Owns/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Own.vehicle() instead.
        "prototype$__get__vehicle": {
          url: urlBase + "/Owns/:id/vehicle",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Own.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Owns/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Own.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/Owns/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Own.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/Owns/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Own.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/Owns/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Own.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/Owns/:id/rides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#create
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Owns",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#createMany
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Owns",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#upsert
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Owns",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#exists
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Owns/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#findById
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Owns/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#find
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Owns",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#findOne
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Owns/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#updateAll
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Owns/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#deleteById
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Owns/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#count
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Owns/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#prototype$updateAttributes
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Owns/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#createChangeStream
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Owns/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Own#getVehicle
         * @methodOf lbServices.Own
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `vehicle` – `{object=}` - 
         */
        "getVehicle": {
          url: urlBase + "/Owns/getVehicle",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.findById() instead.
        "::findById::Member::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.destroyById() instead.
        "::destroyById::Member::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.owns.updateById() instead.
        "::updateById::Member::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/owns/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.owns() instead.
        "::get::Member::owns": {
          isArray: true,
          url: urlBase + "/Members/:id/owns",
          method: "GET"
        },

        // INTERNAL. Use Member.owns.create() instead.
        "::create::Member::owns": {
          url: urlBase + "/Members/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Member.owns.createMany() instead.
        "::createMany::Member::owns": {
          isArray: true,
          url: urlBase + "/Members/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Member.owns.destroyAll() instead.
        "::delete::Member::owns": {
          url: urlBase + "/Members/:id/owns",
          method: "DELETE"
        },

        // INTERNAL. Use Member.owns.count() instead.
        "::count::Member::owns": {
          url: urlBase + "/Members/:id/owns/count",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.findById() instead.
        "::findById::Vehicle::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.destroyById() instead.
        "::destroyById::Vehicle::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.owns.updateById() instead.
        "::updateById::Vehicle::owns": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Vehicles/:id/owns/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Vehicle.owns() instead.
        "::get::Vehicle::owns": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/owns",
          method: "GET"
        },

        // INTERNAL. Use Vehicle.owns.create() instead.
        "::create::Vehicle::owns": {
          url: urlBase + "/Vehicles/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.owns.createMany() instead.
        "::createMany::Vehicle::owns": {
          isArray: true,
          url: urlBase + "/Vehicles/:id/owns",
          method: "POST"
        },

        // INTERNAL. Use Vehicle.owns.destroyAll() instead.
        "::delete::Vehicle::owns": {
          url: urlBase + "/Vehicles/:id/owns",
          method: "DELETE"
        },

        // INTERNAL. Use Vehicle.owns.count() instead.
        "::count::Vehicle::owns": {
          url: urlBase + "/Vehicles/:id/owns/count",
          method: "GET"
        },

        // INTERNAL. Use Ride.own() instead.
        "::get::Ride::own": {
          url: urlBase + "/Rides/:id/own",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.own() instead.
        "::get::OfferQueue::own": {
          url: urlBase + "/OfferQueues/:id/own",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Own#updateOrCreate
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Own#update
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Own#destroyById
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Own#removeById
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Own#modelName
    * @propertyOf lbServices.Own
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Own`.
    */
    R.modelName = "Own";


        /**
         * @ngdoc method
         * @name lbServices.Own#member
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::Own::member"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own#vehicle
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Fetches belongsTo relation vehicle.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Vehicle` object.)
         * </em>
         */
        R.vehicle = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::Own::vehicle"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Own.rides
     * @header lbServices.Own.rides
     * @object
     * @description
     *
     * The object `Own.rides` groups methods
     * manipulating `Ride` instances related to `Own`.
     *
     * Call {@link lbServices.Own#rides Own.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Own#rides
         * @methodOf lbServices.Own
         *
         * @description
         *
         * Queries rides of Own.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#count
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Counts rides of Own.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#create
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#createMany
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#destroyAll
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#destroyById
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#findById
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::Own::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Own.rides#updateById
         * @methodOf lbServices.Own.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::Own::rides"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Join
 * @header lbServices.Join
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Join` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Join",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Joins/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Join.ride() instead.
        "prototype$__get__ride": {
          url: urlBase + "/Joins/:id/ride",
          method: "GET"
        },

        // INTERNAL. Use Join.request() instead.
        "prototype$__get__request": {
          url: urlBase + "/Joins/:id/request",
          method: "GET"
        },

        // INTERNAL. Use Join.request.create() instead.
        "prototype$__create__request": {
          url: urlBase + "/Joins/:id/request",
          method: "POST"
        },

        // INTERNAL. Use Join.request.update() instead.
        "prototype$__update__request": {
          url: urlBase + "/Joins/:id/request",
          method: "PUT"
        },

        // INTERNAL. Use Join.request.destroy() instead.
        "prototype$__destroy__request": {
          url: urlBase + "/Joins/:id/request",
          method: "DELETE"
        },

        // INTERNAL. Use Join.icon() instead.
        "prototype$__get__icon": {
          url: urlBase + "/Joins/:id/icon",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#create
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Joins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#createMany
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Joins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#upsert
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Joins",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#exists
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Joins/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#findById
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Joins/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#find
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Joins",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#findOne
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Joins/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#updateAll
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Joins/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#deleteById
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Joins/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#count
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Joins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#prototype$updateAttributes
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Joins/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#createChangeStream
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Joins/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Join#addJoin
         * @methodOf lbServices.Join
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `join` – `{object=}` - 
         */
        "addJoin": {
          url: urlBase + "/Joins/addJoin",
          method: "POST"
        },

        // INTERNAL. Use Ride.joins.findById() instead.
        "::findById::Ride::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.destroyById() instead.
        "::destroyById::Ride::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.joins.updateById() instead.
        "::updateById::Ride::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.joins() instead.
        "::get::Ride::joins": {
          isArray: true,
          url: urlBase + "/Rides/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Ride.joins.create() instead.
        "::create::Ride::joins": {
          url: urlBase + "/Rides/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Ride.joins.createMany() instead.
        "::createMany::Ride::joins": {
          isArray: true,
          url: urlBase + "/Rides/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Ride.joins.destroyAll() instead.
        "::delete::Ride::joins": {
          url: urlBase + "/Rides/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.joins.count() instead.
        "::count::Ride::joins": {
          url: urlBase + "/Rides/:id/joins/count",
          method: "GET"
        },

        // INTERNAL. Use Request.join() instead.
        "::get::request::join": {
          url: urlBase + "/requests/:id/join",
          method: "GET"
        },

        // INTERNAL. Use Request.join.create() instead.
        "::create::request::join": {
          url: urlBase + "/requests/:id/join",
          method: "POST"
        },

        // INTERNAL. Use Request.join.createMany() instead.
        "::createMany::request::join": {
          isArray: true,
          url: urlBase + "/requests/:id/join",
          method: "POST"
        },

        // INTERNAL. Use Request.join.update() instead.
        "::update::request::join": {
          url: urlBase + "/requests/:id/join",
          method: "PUT"
        },

        // INTERNAL. Use Request.join.destroy() instead.
        "::destroy::request::join": {
          url: urlBase + "/requests/:id/join",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.findById() instead.
        "::findById::Icon::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Icon.joins.destroyById() instead.
        "::destroyById::Icon::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.updateById() instead.
        "::updateById::Icon::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Icon.joins() instead.
        "::get::Icon::joins": {
          isArray: true,
          url: urlBase + "/Icons/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Icon.joins.create() instead.
        "::create::Icon::joins": {
          url: urlBase + "/Icons/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Icon.joins.createMany() instead.
        "::createMany::Icon::joins": {
          isArray: true,
          url: urlBase + "/Icons/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Icon.joins.destroyAll() instead.
        "::delete::Icon::joins": {
          url: urlBase + "/Icons/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.count() instead.
        "::count::Icon::joins": {
          url: urlBase + "/Icons/:id/joins/count",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.joins.findById() instead.
        "::findById::OfferQueue::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.joins.destroyById() instead.
        "::destroyById::OfferQueue::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.joins.updateById() instead.
        "::updateById::OfferQueue::joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OfferQueue.joins() instead.
        "::get::OfferQueue::joins": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.joins.create() instead.
        "::create::OfferQueue::joins": {
          url: urlBase + "/OfferQueues/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.joins.createMany() instead.
        "::createMany::OfferQueue::joins": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.joins.destroyAll() instead.
        "::delete::OfferQueue::joins": {
          url: urlBase + "/OfferQueues/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.joins.count() instead.
        "::count::OfferQueue::joins": {
          url: urlBase + "/OfferQueues/:id/joins/count",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.join() instead.
        "::get::RequestQueue::join": {
          url: urlBase + "/RequestQueues/:id/join",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.join.create() instead.
        "::create::RequestQueue::join": {
          url: urlBase + "/RequestQueues/:id/join",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.join.createMany() instead.
        "::createMany::RequestQueue::join": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/join",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.join.update() instead.
        "::update::RequestQueue::join": {
          url: urlBase + "/RequestQueues/:id/join",
          method: "PUT"
        },

        // INTERNAL. Use RequestQueue.join.destroy() instead.
        "::destroy::RequestQueue::join": {
          url: urlBase + "/RequestQueues/:id/join",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Join#updateOrCreate
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Join#update
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Join#destroyById
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Join#removeById
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Join#modelName
    * @propertyOf lbServices.Join
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Join`.
    */
    R.modelName = "Join";


        /**
         * @ngdoc method
         * @name lbServices.Join#ride
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Fetches belongsTo relation ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.ride = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::Join::ride"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Join.request
     * @header lbServices.Join.request
     * @object
     * @description
     *
     * The object `Join.request` groups methods
     * manipulating `Request` instances related to `Join`.
     *
     * Call {@link lbServices.Join#request Join.request()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Join#request
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Fetches hasOne relation request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.request = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::Join::request"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join.request#create
         * @methodOf lbServices.Join.request
         *
         * @description
         *
         * Creates a new instance in request of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.request.create = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::create::Join::request"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join.request#createMany
         * @methodOf lbServices.Join.request
         *
         * @description
         *
         * Creates a new instance in request of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.request.createMany = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::createMany::Join::request"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join.request#destroy
         * @methodOf lbServices.Join.request
         *
         * @description
         *
         * Deletes request of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.request.destroy = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::destroy::Join::request"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join.request#update
         * @methodOf lbServices.Join.request
         *
         * @description
         *
         * Update request of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.request.update = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::update::Join::request"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Join#icon
         * @methodOf lbServices.Join
         *
         * @description
         *
         * Fetches belongsTo relation icon.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        R.icon = function() {
          var TargetResource = $injector.get("Icon");
          var action = TargetResource["::get::Join::icon"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Request
 * @header lbServices.Request
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Request` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Request",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/requests/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Request.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/requests/:id/member",
          method: "GET"
        },

        // INTERNAL. Use Request.join() instead.
        "prototype$__get__join": {
          url: urlBase + "/requests/:id/join",
          method: "GET"
        },

        // INTERNAL. Use Request.join.create() instead.
        "prototype$__create__join": {
          url: urlBase + "/requests/:id/join",
          method: "POST"
        },

        // INTERNAL. Use Request.join.update() instead.
        "prototype$__update__join": {
          url: urlBase + "/requests/:id/join",
          method: "PUT"
        },

        // INTERNAL. Use Request.join.destroy() instead.
        "prototype$__destroy__join": {
          url: urlBase + "/requests/:id/join",
          method: "DELETE"
        },

        // INTERNAL. Use Request.pickup() instead.
        "prototype$__get__pickup": {
          url: urlBase + "/requests/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use Request.destination() instead.
        "prototype$__get__destination": {
          url: urlBase + "/requests/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use Request.requestQueue.findById() instead.
        "prototype$__findById__requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/requestQueue/:fk",
          method: "GET"
        },

        // INTERNAL. Use Request.requestQueue.destroyById() instead.
        "prototype$__destroyById__requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/requestQueue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Request.requestQueue.updateById() instead.
        "prototype$__updateById__requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/requestQueue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Request.matchedSeat.findById() instead.
        "prototype$__findById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/matchedSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Request.matchedSeat.destroyById() instead.
        "prototype$__destroyById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/matchedSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Request.matchedSeat.updateById() instead.
        "prototype$__updateById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/matchedSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Request.pendingSeat.findById() instead.
        "prototype$__findById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/pendingSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Request.pendingSeat.destroyById() instead.
        "prototype$__destroyById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/pendingSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Request.pendingSeat.updateById() instead.
        "prototype$__updateById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/pendingSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Request.requestQueue() instead.
        "prototype$__get__requestQueue": {
          isArray: true,
          url: urlBase + "/requests/:id/requestQueue",
          method: "GET"
        },

        // INTERNAL. Use Request.requestQueue.create() instead.
        "prototype$__create__requestQueue": {
          url: urlBase + "/requests/:id/requestQueue",
          method: "POST"
        },

        // INTERNAL. Use Request.requestQueue.destroyAll() instead.
        "prototype$__delete__requestQueue": {
          url: urlBase + "/requests/:id/requestQueue",
          method: "DELETE"
        },

        // INTERNAL. Use Request.requestQueue.count() instead.
        "prototype$__count__requestQueue": {
          url: urlBase + "/requests/:id/requestQueue/count",
          method: "GET"
        },

        // INTERNAL. Use Request.matchedSeat() instead.
        "prototype$__get__matchedSeat": {
          isArray: true,
          url: urlBase + "/requests/:id/matchedSeat",
          method: "GET"
        },

        // INTERNAL. Use Request.matchedSeat.create() instead.
        "prototype$__create__matchedSeat": {
          url: urlBase + "/requests/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use Request.matchedSeat.destroyAll() instead.
        "prototype$__delete__matchedSeat": {
          url: urlBase + "/requests/:id/matchedSeat",
          method: "DELETE"
        },

        // INTERNAL. Use Request.matchedSeat.count() instead.
        "prototype$__count__matchedSeat": {
          url: urlBase + "/requests/:id/matchedSeat/count",
          method: "GET"
        },

        // INTERNAL. Use Request.pendingSeat() instead.
        "prototype$__get__pendingSeat": {
          isArray: true,
          url: urlBase + "/requests/:id/pendingSeat",
          method: "GET"
        },

        // INTERNAL. Use Request.pendingSeat.create() instead.
        "prototype$__create__pendingSeat": {
          url: urlBase + "/requests/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use Request.pendingSeat.destroyAll() instead.
        "prototype$__delete__pendingSeat": {
          url: urlBase + "/requests/:id/pendingSeat",
          method: "DELETE"
        },

        // INTERNAL. Use Request.pendingSeat.count() instead.
        "prototype$__count__pendingSeat": {
          url: urlBase + "/requests/:id/pendingSeat/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#create
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/requests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#createMany
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/requests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#upsert
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/requests",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#exists
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/requests/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#findById
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/requests/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#find
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/requests",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#findOne
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/requests/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#updateAll
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/requests/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#deleteById
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/requests/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#count
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/requests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#prototype$updateAttributes
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/requests/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#createChangeStream
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/requests/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#confirmMatch
         * @methodOf lbServices.Request
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `matchicon` – `{number=}` - 
         */
        "confirmMatch": {
          url: urlBase + "/requests/confirmMatch",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#cancelMatch
         * @methodOf lbServices.Request
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "cancelMatch": {
          url: urlBase + "/requests/cancelMatch",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#cancelConfirmMatch
         * @methodOf lbServices.Request
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "cancelConfirmMatch": {
          url: urlBase + "/requests/cancelConfirmMatch",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#addRequest
         * @methodOf lbServices.Request
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `req` – `{obj=}` - 
         */
        "addRequest": {
          url: urlBase + "/requests/addRequest",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#push
         * @methodOf lbServices.Request
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "push": {
          url: urlBase + "/requests/push",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#checkAutoCancel
         * @methodOf lbServices.Request
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{string=}` - 
         */
        "checkAutoCancel": {
          url: urlBase + "/requests/checkAutoCancel",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Request#addRequestAgain
         * @methodOf lbServices.Request
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `req` – `{obj=}` - 
         */
        "addRequestAgain": {
          url: urlBase + "/requests/addRequestAgain",
          method: "POST"
        },

        // INTERNAL. Use Member.requests.findById() instead.
        "::findById::Member::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Member.requests.destroyById() instead.
        "::destroyById::Member::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Member.requests.updateById() instead.
        "::updateById::Member::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Members/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Member.requests() instead.
        "::get::Member::requests": {
          isArray: true,
          url: urlBase + "/Members/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Member.requests.create() instead.
        "::create::Member::requests": {
          url: urlBase + "/Members/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Member.requests.createMany() instead.
        "::createMany::Member::requests": {
          isArray: true,
          url: urlBase + "/Members/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Member.requests.destroyAll() instead.
        "::delete::Member::requests": {
          url: urlBase + "/Members/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Member.requests.count() instead.
        "::count::Member::requests": {
          url: urlBase + "/Members/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use Join.request() instead.
        "::get::Join::request": {
          url: urlBase + "/Joins/:id/request",
          method: "GET"
        },

        // INTERNAL. Use Join.request.create() instead.
        "::create::Join::request": {
          url: urlBase + "/Joins/:id/request",
          method: "POST"
        },

        // INTERNAL. Use Join.request.createMany() instead.
        "::createMany::Join::request": {
          isArray: true,
          url: urlBase + "/Joins/:id/request",
          method: "POST"
        },

        // INTERNAL. Use Join.request.update() instead.
        "::update::Join::request": {
          url: urlBase + "/Joins/:id/request",
          method: "PUT"
        },

        // INTERNAL. Use Join.request.destroy() instead.
        "::destroy::Join::request": {
          url: urlBase + "/Joins/:id/request",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.findById() instead.
        "::findById::pickup::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pickup.requests.destroyById() instead.
        "::destroyById::pickup::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.updateById() instead.
        "::updateById::pickup::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pickup.requests() instead.
        "::get::pickup::requests": {
          isArray: true,
          url: urlBase + "/pickups/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Pickup.requests.create() instead.
        "::create::pickup::requests": {
          url: urlBase + "/pickups/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Pickup.requests.createMany() instead.
        "::createMany::pickup::requests": {
          isArray: true,
          url: urlBase + "/pickups/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Pickup.requests.destroyAll() instead.
        "::delete::pickup::requests": {
          url: urlBase + "/pickups/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.count() instead.
        "::count::pickup::requests": {
          url: urlBase + "/pickups/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.findById() instead.
        "::findById::destination::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.destroyById() instead.
        "::destroyById::destination::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.requests.updateById() instead.
        "::updateById::destination::requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Destination.requests() instead.
        "::get::destination::requests": {
          isArray: true,
          url: urlBase + "/destinations/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.create() instead.
        "::create::destination::requests": {
          url: urlBase + "/destinations/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Destination.requests.createMany() instead.
        "::createMany::destination::requests": {
          isArray: true,
          url: urlBase + "/destinations/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Destination.requests.destroyAll() instead.
        "::delete::destination::requests": {
          url: urlBase + "/destinations/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.requests.count() instead.
        "::count::destination::requests": {
          url: urlBase + "/destinations/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.request() instead.
        "::get::RequestQueue::request": {
          url: urlBase + "/RequestQueues/:id/request",
          method: "GET"
        },

        // INTERNAL. Use MatchedSeat.request() instead.
        "::get::MatchedSeat::request": {
          url: urlBase + "/MatchedSeats/:id/request",
          method: "GET"
        },

        // INTERNAL. Use PendingSeat.request() instead.
        "::get::PendingSeat::request": {
          url: urlBase + "/PendingSeats/:id/request",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Request#updateOrCreate
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Request#update
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Request#destroyById
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Request#removeById
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Request#modelName
    * @propertyOf lbServices.Request
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Request`.
    */
    R.modelName = "Request";


        /**
         * @ngdoc method
         * @name lbServices.Request#member
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::request::member"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Request.join
     * @header lbServices.Request.join
     * @object
     * @description
     *
     * The object `Request.join` groups methods
     * manipulating `Join` instances related to `Request`.
     *
     * Call {@link lbServices.Request#join Request.join()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Request#join
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Fetches hasOne relation join.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.join = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::get::request::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.join#create
         * @methodOf lbServices.Request.join
         *
         * @description
         *
         * Creates a new instance in join of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.join.create = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::create::request::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.join#createMany
         * @methodOf lbServices.Request.join
         *
         * @description
         *
         * Creates a new instance in join of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.join.createMany = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::createMany::request::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.join#destroy
         * @methodOf lbServices.Request.join
         *
         * @description
         *
         * Deletes join of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.join.destroy = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::destroy::request::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.join#update
         * @methodOf lbServices.Request.join
         *
         * @description
         *
         * Update join of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.join.update = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::update::request::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request#pickup
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Fetches belongsTo relation pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R.pickup = function() {
          var TargetResource = $injector.get("Pickup");
          var action = TargetResource["::get::request::pickup"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request#destination
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Fetches belongsTo relation destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R.destination = function() {
          var TargetResource = $injector.get("Destination");
          var action = TargetResource["::get::request::destination"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Request.requestQueue
     * @header lbServices.Request.requestQueue
     * @object
     * @description
     *
     * The object `Request.requestQueue` groups methods
     * manipulating `RequestQueue` instances related to `Request`.
     *
     * Call {@link lbServices.Request#requestQueue Request.requestQueue()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Request#requestQueue
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Queries requestQueue of request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::get::request::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.requestQueue#count
         * @methodOf lbServices.Request.requestQueue
         *
         * @description
         *
         * Counts requestQueue of request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.requestQueue.count = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::count::request::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.requestQueue#create
         * @methodOf lbServices.Request.requestQueue
         *
         * @description
         *
         * Creates a new instance in requestQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue.create = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::create::request::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.requestQueue#createMany
         * @methodOf lbServices.Request.requestQueue
         *
         * @description
         *
         * Creates a new instance in requestQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue.createMany = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::createMany::request::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.requestQueue#destroyAll
         * @methodOf lbServices.Request.requestQueue
         *
         * @description
         *
         * Deletes all requestQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requestQueue.destroyAll = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::delete::request::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.requestQueue#destroyById
         * @methodOf lbServices.Request.requestQueue
         *
         * @description
         *
         * Delete a related item by id for requestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requestQueue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requestQueue.destroyById = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::destroyById::request::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.requestQueue#findById
         * @methodOf lbServices.Request.requestQueue
         *
         * @description
         *
         * Find a related item by id for requestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requestQueue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue.findById = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::findById::request::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.requestQueue#updateById
         * @methodOf lbServices.Request.requestQueue
         *
         * @description
         *
         * Update a related item by id for requestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requestQueue
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue.updateById = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::updateById::request::requestQueue"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Request.matchedSeat
     * @header lbServices.Request.matchedSeat
     * @object
     * @description
     *
     * The object `Request.matchedSeat` groups methods
     * manipulating `MatchedSeat` instances related to `Request`.
     *
     * Call {@link lbServices.Request#matchedSeat Request.matchedSeat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Request#matchedSeat
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Queries matchedSeat of request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::get::request::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.matchedSeat#count
         * @methodOf lbServices.Request.matchedSeat
         *
         * @description
         *
         * Counts matchedSeat of request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.matchedSeat.count = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::count::request::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.matchedSeat#create
         * @methodOf lbServices.Request.matchedSeat
         *
         * @description
         *
         * Creates a new instance in matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.create = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::create::request::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.matchedSeat#createMany
         * @methodOf lbServices.Request.matchedSeat
         *
         * @description
         *
         * Creates a new instance in matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.createMany = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::createMany::request::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.matchedSeat#destroyAll
         * @methodOf lbServices.Request.matchedSeat
         *
         * @description
         *
         * Deletes all matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.matchedSeat.destroyAll = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::delete::request::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.matchedSeat#destroyById
         * @methodOf lbServices.Request.matchedSeat
         *
         * @description
         *
         * Delete a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.matchedSeat.destroyById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::destroyById::request::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.matchedSeat#findById
         * @methodOf lbServices.Request.matchedSeat
         *
         * @description
         *
         * Find a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.findById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::findById::request::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.matchedSeat#updateById
         * @methodOf lbServices.Request.matchedSeat
         *
         * @description
         *
         * Update a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.updateById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::updateById::request::matchedSeat"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Request.pendingSeat
     * @header lbServices.Request.pendingSeat
     * @object
     * @description
     *
     * The object `Request.pendingSeat` groups methods
     * manipulating `PendingSeat` instances related to `Request`.
     *
     * Call {@link lbServices.Request#pendingSeat Request.pendingSeat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Request#pendingSeat
         * @methodOf lbServices.Request
         *
         * @description
         *
         * Queries pendingSeat of request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::get::request::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.pendingSeat#count
         * @methodOf lbServices.Request.pendingSeat
         *
         * @description
         *
         * Counts pendingSeat of request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.pendingSeat.count = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::count::request::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.pendingSeat#create
         * @methodOf lbServices.Request.pendingSeat
         *
         * @description
         *
         * Creates a new instance in pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.create = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::create::request::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.pendingSeat#createMany
         * @methodOf lbServices.Request.pendingSeat
         *
         * @description
         *
         * Creates a new instance in pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.createMany = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::createMany::request::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.pendingSeat#destroyAll
         * @methodOf lbServices.Request.pendingSeat
         *
         * @description
         *
         * Deletes all pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendingSeat.destroyAll = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::delete::request::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.pendingSeat#destroyById
         * @methodOf lbServices.Request.pendingSeat
         *
         * @description
         *
         * Delete a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendingSeat.destroyById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::destroyById::request::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.pendingSeat#findById
         * @methodOf lbServices.Request.pendingSeat
         *
         * @description
         *
         * Find a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.findById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::findById::request::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Request.pendingSeat#updateById
         * @methodOf lbServices.Request.pendingSeat
         *
         * @description
         *
         * Update a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.updateById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::updateById::request::pendingSeat"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Pickup
 * @header lbServices.Pickup
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pickup` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Pickup",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/pickups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Pickup.requests.findById() instead.
        "prototype$__findById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pickup.requests.destroyById() instead.
        "prototype$__destroyById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.updateById() instead.
        "prototype$__updateById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pickup.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pickups/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pickup.requests() instead.
        "prototype$__get__requests": {
          isArray: true,
          url: urlBase + "/pickups/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Pickup.requests.create() instead.
        "prototype$__create__requests": {
          url: urlBase + "/pickups/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Pickup.requests.destroyAll() instead.
        "prototype$__delete__requests": {
          url: urlBase + "/pickups/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.requests.count() instead.
        "prototype$__count__requests": {
          url: urlBase + "/pickups/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/pickups/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Pickup.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/pickups/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Pickup.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/pickups/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Pickup.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/pickups/:id/rides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#create
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/pickups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#createMany
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/pickups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#upsert
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/pickups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#exists
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/pickups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#findById
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/pickups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#find
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/pickups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#findOne
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/pickups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#updateAll
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/pickups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#deleteById
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/pickups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#count
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/pickups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#prototype$updateAttributes
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/pickups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pickup#createChangeStream
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/pickups/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Ride.pickup() instead.
        "::get::Ride::pickup": {
          url: urlBase + "/Rides/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use Request.pickup() instead.
        "::get::request::pickup": {
          url: urlBase + "/requests/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.pickup() instead.
        "::get::OfferQueue::pickup": {
          url: urlBase + "/OfferQueues/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.pickup() instead.
        "::get::RequestQueue::pickup": {
          url: urlBase + "/RequestQueues/:id/pickup",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Pickup#updateOrCreate
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Pickup#update
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Pickup#destroyById
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Pickup#removeById
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Pickup#modelName
    * @propertyOf lbServices.Pickup
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Pickup`.
    */
    R.modelName = "Pickup";

    /**
     * @ngdoc object
     * @name lbServices.Pickup.requests
     * @header lbServices.Pickup.requests
     * @object
     * @description
     *
     * The object `Pickup.requests` groups methods
     * manipulating `Request` instances related to `Pickup`.
     *
     * Call {@link lbServices.Pickup#requests Pickup.requests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Pickup#requests
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Queries requests of pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#count
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Counts requests of pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.requests.count = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::count::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#create
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.create = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::create::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#createMany
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.createMany = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::createMany::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#destroyAll
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Deletes all requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyAll = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::delete::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#destroyById
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Delete a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::destroyById::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#findById
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Find a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.findById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::findById::pickup::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.requests#updateById
         * @methodOf lbServices.Pickup.requests
         *
         * @description
         *
         * Update a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.updateById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::updateById::pickup::requests"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Pickup.rides
     * @header lbServices.Pickup.rides
     * @object
     * @description
     *
     * The object `Pickup.rides` groups methods
     * manipulating `Ride` instances related to `Pickup`.
     *
     * Call {@link lbServices.Pickup#rides Pickup.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Pickup#rides
         * @methodOf lbServices.Pickup
         *
         * @description
         *
         * Queries rides of pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#count
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Counts rides of pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#create
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#createMany
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#destroyAll
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#destroyById
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#findById
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::pickup::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pickup.rides#updateById
         * @methodOf lbServices.Pickup.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::pickup::rides"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Destination
 * @header lbServices.Destination
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Destination` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Destination",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/destinations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Destination.requests.findById() instead.
        "prototype$__findById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.destroyById() instead.
        "prototype$__destroyById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.requests.updateById() instead.
        "prototype$__updateById__requests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/requests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Destination.rides.findById() instead.
        "prototype$__findById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.destroyById() instead.
        "prototype$__destroyById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.rides.updateById() instead.
        "prototype$__updateById__rides": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/destinations/:id/rides/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Destination.requests() instead.
        "prototype$__get__requests": {
          isArray: true,
          url: urlBase + "/destinations/:id/requests",
          method: "GET"
        },

        // INTERNAL. Use Destination.requests.create() instead.
        "prototype$__create__requests": {
          url: urlBase + "/destinations/:id/requests",
          method: "POST"
        },

        // INTERNAL. Use Destination.requests.destroyAll() instead.
        "prototype$__delete__requests": {
          url: urlBase + "/destinations/:id/requests",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.requests.count() instead.
        "prototype$__count__requests": {
          url: urlBase + "/destinations/:id/requests/count",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides() instead.
        "prototype$__get__rides": {
          isArray: true,
          url: urlBase + "/destinations/:id/rides",
          method: "GET"
        },

        // INTERNAL. Use Destination.rides.create() instead.
        "prototype$__create__rides": {
          url: urlBase + "/destinations/:id/rides",
          method: "POST"
        },

        // INTERNAL. Use Destination.rides.destroyAll() instead.
        "prototype$__delete__rides": {
          url: urlBase + "/destinations/:id/rides",
          method: "DELETE"
        },

        // INTERNAL. Use Destination.rides.count() instead.
        "prototype$__count__rides": {
          url: urlBase + "/destinations/:id/rides/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#create
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/destinations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#createMany
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/destinations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#upsert
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/destinations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#exists
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/destinations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#findById
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/destinations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#find
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/destinations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#findOne
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/destinations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#updateAll
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/destinations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#deleteById
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/destinations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#count
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/destinations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#prototype$updateAttributes
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/destinations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#createChangeStream
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/destinations/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Destination#getDestination
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `newDesName` – `{string=}` - 
         */
        "getDestination": {
          url: urlBase + "/destinations/getDestination",
          method: "POST"
        },

        // INTERNAL. Use Ride.destination() instead.
        "::get::Ride::destination": {
          url: urlBase + "/Rides/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use Request.destination() instead.
        "::get::request::destination": {
          url: urlBase + "/requests/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.destination() instead.
        "::get::OfferQueue::destination": {
          url: urlBase + "/OfferQueues/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.destination() instead.
        "::get::RequestQueue::destination": {
          url: urlBase + "/RequestQueues/:id/destination",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Destination#updateOrCreate
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Destination#update
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Destination#destroyById
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Destination#removeById
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Destination#modelName
    * @propertyOf lbServices.Destination
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Destination`.
    */
    R.modelName = "Destination";

    /**
     * @ngdoc object
     * @name lbServices.Destination.requests
     * @header lbServices.Destination.requests
     * @object
     * @description
     *
     * The object `Destination.requests` groups methods
     * manipulating `Request` instances related to `Destination`.
     *
     * Call {@link lbServices.Destination#requests Destination.requests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Destination#requests
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Queries requests of destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#count
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Counts requests of destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.requests.count = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::count::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#create
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.create = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::create::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#createMany
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Creates a new instance in requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.createMany = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::createMany::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#destroyAll
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Deletes all requests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyAll = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::delete::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#destroyById
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Delete a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requests.destroyById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::destroyById::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#findById
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Find a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.findById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::findById::destination::requests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.requests#updateById
         * @methodOf lbServices.Destination.requests
         *
         * @description
         *
         * Update a related item by id for requests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for requests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.requests.updateById = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::updateById::destination::requests"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Destination.rides
     * @header lbServices.Destination.rides
     * @object
     * @description
     *
     * The object `Destination.rides` groups methods
     * manipulating `Ride` instances related to `Destination`.
     *
     * Call {@link lbServices.Destination#rides Destination.rides()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Destination#rides
         * @methodOf lbServices.Destination
         *
         * @description
         *
         * Queries rides of destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#count
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Counts rides of destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.rides.count = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::count::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#create
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.create = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::create::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#createMany
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Creates a new instance in rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.createMany = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::createMany::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#destroyAll
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Deletes all rides of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyAll = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::delete::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#destroyById
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Delete a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.rides.destroyById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::destroyById::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#findById
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Find a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.findById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::findById::destination::rides"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Destination.rides#updateById
         * @methodOf lbServices.Destination.rides
         *
         * @description
         *
         * Update a related item by id for rides.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for rides
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.rides.updateById = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::updateById::destination::rides"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Icon
 * @header lbServices.Icon
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Icon` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Icon",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Icons/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Icon.joins.findById() instead.
        "prototype$__findById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Icon.joins.destroyById() instead.
        "prototype$__destroyById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.updateById() instead.
        "prototype$__updateById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Icons/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Icon.joins() instead.
        "prototype$__get__joins": {
          isArray: true,
          url: urlBase + "/Icons/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use Icon.joins.create() instead.
        "prototype$__create__joins": {
          url: urlBase + "/Icons/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use Icon.joins.destroyAll() instead.
        "prototype$__delete__joins": {
          url: urlBase + "/Icons/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use Icon.joins.count() instead.
        "prototype$__count__joins": {
          url: urlBase + "/Icons/:id/joins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#create
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Icons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#createMany
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Icons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#upsert
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Icons",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#exists
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Icons/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#findById
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Icons/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#find
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Icons",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#findOne
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Icons/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#updateAll
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Icons/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#deleteById
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Icons/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#count
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Icons/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#prototype$updateAttributes
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Icons/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Icon#createChangeStream
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Icons/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Join.icon() instead.
        "::get::Join::icon": {
          url: urlBase + "/Joins/:id/icon",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Icon#updateOrCreate
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Icon#update
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Icon#destroyById
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Icon#removeById
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Icon` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Icon#modelName
    * @propertyOf lbServices.Icon
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Icon`.
    */
    R.modelName = "Icon";

    /**
     * @ngdoc object
     * @name lbServices.Icon.joins
     * @header lbServices.Icon.joins
     * @object
     * @description
     *
     * The object `Icon.joins` groups methods
     * manipulating `Join` instances related to `Icon`.
     *
     * Call {@link lbServices.Icon#joins Icon.joins()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Icon#joins
         * @methodOf lbServices.Icon
         *
         * @description
         *
         * Queries joins of Icon.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::get::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#count
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Counts joins of Icon.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.joins.count = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::count::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#create
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.create = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::create::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#createMany
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.createMany = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::createMany::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#destroyAll
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Deletes all joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyAll = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::delete::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#destroyById
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Delete a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::destroyById::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#findById
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Find a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.findById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::findById::Icon::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Icon.joins#updateById
         * @methodOf lbServices.Icon.joins
         *
         * @description
         *
         * Update a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.updateById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::updateById::Icon::joins"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.OfferQueue
 * @header lbServices.OfferQueue
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `OfferQueue` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "OfferQueue",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/OfferQueues/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use OfferQueue.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/OfferQueues/:id/member",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.joins.findById() instead.
        "prototype$__findById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/joins/:fk",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.joins.destroyById() instead.
        "prototype$__destroyById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/joins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.joins.updateById() instead.
        "prototype$__updateById__joins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/joins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OfferQueue.pickup() instead.
        "prototype$__get__pickup": {
          url: urlBase + "/OfferQueues/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.destination() instead.
        "prototype$__get__destination": {
          url: urlBase + "/OfferQueues/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.own() instead.
        "prototype$__get__own": {
          url: urlBase + "/OfferQueues/:id/own",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.offerQueue.findById() instead.
        "prototype$__findById__offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/offerQueue/:fk",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.offerQueue.destroyById() instead.
        "prototype$__destroyById__offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/offerQueue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.offerQueue.updateById() instead.
        "prototype$__updateById__offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/offerQueue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OfferQueue.ride() instead.
        "prototype$__get__ride": {
          url: urlBase + "/OfferQueues/:id/ride",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.findById() instead.
        "prototype$__findById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/matchedSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.destroyById() instead.
        "prototype$__destroyById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/matchedSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.updateById() instead.
        "prototype$__updateById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/matchedSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.findById() instead.
        "prototype$__findById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/pendingSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.destroyById() instead.
        "prototype$__destroyById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/pendingSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.updateById() instead.
        "prototype$__updateById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/pendingSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OfferQueue.joins() instead.
        "prototype$__get__joins": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/joins",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.joins.create() instead.
        "prototype$__create__joins": {
          url: urlBase + "/OfferQueues/:id/joins",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.joins.destroyAll() instead.
        "prototype$__delete__joins": {
          url: urlBase + "/OfferQueues/:id/joins",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.joins.count() instead.
        "prototype$__count__joins": {
          url: urlBase + "/OfferQueues/:id/joins/count",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.offerQueue() instead.
        "prototype$__get__offerQueue": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/offerQueue",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.offerQueue.create() instead.
        "prototype$__create__offerQueue": {
          url: urlBase + "/OfferQueues/:id/offerQueue",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.offerQueue.destroyAll() instead.
        "prototype$__delete__offerQueue": {
          url: urlBase + "/OfferQueues/:id/offerQueue",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.offerQueue.count() instead.
        "prototype$__count__offerQueue": {
          url: urlBase + "/OfferQueues/:id/offerQueue/count",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.matchedSeat() instead.
        "prototype$__get__matchedSeat": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/matchedSeat",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.create() instead.
        "prototype$__create__matchedSeat": {
          url: urlBase + "/OfferQueues/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.destroyAll() instead.
        "prototype$__delete__matchedSeat": {
          url: urlBase + "/OfferQueues/:id/matchedSeat",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.count() instead.
        "prototype$__count__matchedSeat": {
          url: urlBase + "/OfferQueues/:id/matchedSeat/count",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.pendingSeat() instead.
        "prototype$__get__pendingSeat": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/pendingSeat",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.create() instead.
        "prototype$__create__pendingSeat": {
          url: urlBase + "/OfferQueues/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.destroyAll() instead.
        "prototype$__delete__pendingSeat": {
          url: urlBase + "/OfferQueues/:id/pendingSeat",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.count() instead.
        "prototype$__count__pendingSeat": {
          url: urlBase + "/OfferQueues/:id/pendingSeat/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#create
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/OfferQueues",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#createMany
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/OfferQueues",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#upsert
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/OfferQueues",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#exists
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/OfferQueues/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#findById
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/OfferQueues/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#find
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/OfferQueues",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#findOne
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/OfferQueues/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#updateAll
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/OfferQueues/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#deleteById
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/OfferQueues/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#count
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/OfferQueues/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#prototype$updateAttributes
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/OfferQueues/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#createChangeStream
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/OfferQueues/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#possibleOffer
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `offer` – `{object=}` - 
         */
        "possibleOffer": {
          url: urlBase + "/OfferQueues/possibleOffer",
          method: "POST"
        },

        // INTERNAL. Use Ride.offerQueue.findById() instead.
        "::findById::Ride::offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/offerQueue/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.offerQueue.destroyById() instead.
        "::destroyById::Ride::offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/offerQueue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.offerQueue.updateById() instead.
        "::updateById::Ride::offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/offerQueue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.offerQueue() instead.
        "::get::Ride::offerQueue": {
          isArray: true,
          url: urlBase + "/Rides/:id/offerQueue",
          method: "GET"
        },

        // INTERNAL. Use Ride.offerQueue.create() instead.
        "::create::Ride::offerQueue": {
          url: urlBase + "/Rides/:id/offerQueue",
          method: "POST"
        },

        // INTERNAL. Use Ride.offerQueue.createMany() instead.
        "::createMany::Ride::offerQueue": {
          isArray: true,
          url: urlBase + "/Rides/:id/offerQueue",
          method: "POST"
        },

        // INTERNAL. Use Ride.offerQueue.destroyAll() instead.
        "::delete::Ride::offerQueue": {
          url: urlBase + "/Rides/:id/offerQueue",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.offerQueue.count() instead.
        "::count::Ride::offerQueue": {
          url: urlBase + "/Rides/:id/offerQueue/count",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.offerQueue.findById() instead.
        "::findById::OfferQueue::offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/offerQueue/:fk",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.offerQueue.destroyById() instead.
        "::destroyById::OfferQueue::offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/offerQueue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.offerQueue.updateById() instead.
        "::updateById::OfferQueue::offerQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/offerQueue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OfferQueue.offerQueue() instead.
        "::get::OfferQueue::offerQueue": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/offerQueue",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.offerQueue.create() instead.
        "::create::OfferQueue::offerQueue": {
          url: urlBase + "/OfferQueues/:id/offerQueue",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.offerQueue.createMany() instead.
        "::createMany::OfferQueue::offerQueue": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/offerQueue",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.offerQueue.destroyAll() instead.
        "::delete::OfferQueue::offerQueue": {
          url: urlBase + "/OfferQueues/:id/offerQueue",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.offerQueue.count() instead.
        "::count::OfferQueue::offerQueue": {
          url: urlBase + "/OfferQueues/:id/offerQueue/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#updateOrCreate
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#update
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#destroyById
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#removeById
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.OfferQueue#modelName
    * @propertyOf lbServices.OfferQueue
    * @description
    * The name of the model represented by this $resource,
    * i.e. `OfferQueue`.
    */
    R.modelName = "OfferQueue";


        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#member
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::OfferQueue::member"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.OfferQueue.joins
     * @header lbServices.OfferQueue.joins
     * @object
     * @description
     *
     * The object `OfferQueue.joins` groups methods
     * manipulating `Join` instances related to `OfferQueue`.
     *
     * Call {@link lbServices.OfferQueue#joins OfferQueue.joins()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#joins
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Queries joins of OfferQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::get::OfferQueue::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.joins#count
         * @methodOf lbServices.OfferQueue.joins
         *
         * @description
         *
         * Counts joins of OfferQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.joins.count = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::count::OfferQueue::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.joins#create
         * @methodOf lbServices.OfferQueue.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.create = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::create::OfferQueue::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.joins#createMany
         * @methodOf lbServices.OfferQueue.joins
         *
         * @description
         *
         * Creates a new instance in joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.createMany = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::createMany::OfferQueue::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.joins#destroyAll
         * @methodOf lbServices.OfferQueue.joins
         *
         * @description
         *
         * Deletes all joins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyAll = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::delete::OfferQueue::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.joins#destroyById
         * @methodOf lbServices.OfferQueue.joins
         *
         * @description
         *
         * Delete a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.joins.destroyById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::destroyById::OfferQueue::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.joins#findById
         * @methodOf lbServices.OfferQueue.joins
         *
         * @description
         *
         * Find a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.findById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::findById::OfferQueue::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.joins#updateById
         * @methodOf lbServices.OfferQueue.joins
         *
         * @description
         *
         * Update a related item by id for joins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for joins
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.joins.updateById = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::updateById::OfferQueue::joins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#pickup
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Fetches belongsTo relation pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R.pickup = function() {
          var TargetResource = $injector.get("Pickup");
          var action = TargetResource["::get::OfferQueue::pickup"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#destination
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Fetches belongsTo relation destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R.destination = function() {
          var TargetResource = $injector.get("Destination");
          var action = TargetResource["::get::OfferQueue::destination"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#own
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Fetches belongsTo relation own.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Own` object.)
         * </em>
         */
        R.own = function() {
          var TargetResource = $injector.get("Own");
          var action = TargetResource["::get::OfferQueue::own"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.OfferQueue.offerQueue
     * @header lbServices.OfferQueue.offerQueue
     * @object
     * @description
     *
     * The object `OfferQueue.offerQueue` groups methods
     * manipulating `OfferQueue` instances related to `OfferQueue`.
     *
     * Call {@link lbServices.OfferQueue#offerQueue OfferQueue.offerQueue()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#offerQueue
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Queries offerQueue of OfferQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::get::OfferQueue::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.offerQueue#count
         * @methodOf lbServices.OfferQueue.offerQueue
         *
         * @description
         *
         * Counts offerQueue of OfferQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.offerQueue.count = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::count::OfferQueue::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.offerQueue#create
         * @methodOf lbServices.OfferQueue.offerQueue
         *
         * @description
         *
         * Creates a new instance in offerQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue.create = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::create::OfferQueue::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.offerQueue#createMany
         * @methodOf lbServices.OfferQueue.offerQueue
         *
         * @description
         *
         * Creates a new instance in offerQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue.createMany = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::createMany::OfferQueue::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.offerQueue#destroyAll
         * @methodOf lbServices.OfferQueue.offerQueue
         *
         * @description
         *
         * Deletes all offerQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offerQueue.destroyAll = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::delete::OfferQueue::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.offerQueue#destroyById
         * @methodOf lbServices.OfferQueue.offerQueue
         *
         * @description
         *
         * Delete a related item by id for offerQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for offerQueue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offerQueue.destroyById = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::destroyById::OfferQueue::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.offerQueue#findById
         * @methodOf lbServices.OfferQueue.offerQueue
         *
         * @description
         *
         * Find a related item by id for offerQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for offerQueue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue.findById = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::findById::OfferQueue::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.offerQueue#updateById
         * @methodOf lbServices.OfferQueue.offerQueue
         *
         * @description
         *
         * Update a related item by id for offerQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for offerQueue
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OfferQueue` object.)
         * </em>
         */
        R.offerQueue.updateById = function() {
          var TargetResource = $injector.get("OfferQueue");
          var action = TargetResource["::updateById::OfferQueue::offerQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#ride
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Fetches belongsTo relation ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.ride = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::OfferQueue::ride"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.OfferQueue.matchedSeat
     * @header lbServices.OfferQueue.matchedSeat
     * @object
     * @description
     *
     * The object `OfferQueue.matchedSeat` groups methods
     * manipulating `MatchedSeat` instances related to `OfferQueue`.
     *
     * Call {@link lbServices.OfferQueue#matchedSeat OfferQueue.matchedSeat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#matchedSeat
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Queries matchedSeat of OfferQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::get::OfferQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.matchedSeat#count
         * @methodOf lbServices.OfferQueue.matchedSeat
         *
         * @description
         *
         * Counts matchedSeat of OfferQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.matchedSeat.count = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::count::OfferQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.matchedSeat#create
         * @methodOf lbServices.OfferQueue.matchedSeat
         *
         * @description
         *
         * Creates a new instance in matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.create = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::create::OfferQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.matchedSeat#createMany
         * @methodOf lbServices.OfferQueue.matchedSeat
         *
         * @description
         *
         * Creates a new instance in matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.createMany = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::createMany::OfferQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.matchedSeat#destroyAll
         * @methodOf lbServices.OfferQueue.matchedSeat
         *
         * @description
         *
         * Deletes all matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.matchedSeat.destroyAll = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::delete::OfferQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.matchedSeat#destroyById
         * @methodOf lbServices.OfferQueue.matchedSeat
         *
         * @description
         *
         * Delete a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.matchedSeat.destroyById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::destroyById::OfferQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.matchedSeat#findById
         * @methodOf lbServices.OfferQueue.matchedSeat
         *
         * @description
         *
         * Find a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.findById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::findById::OfferQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.matchedSeat#updateById
         * @methodOf lbServices.OfferQueue.matchedSeat
         *
         * @description
         *
         * Update a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.updateById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::updateById::OfferQueue::matchedSeat"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.OfferQueue.pendingSeat
     * @header lbServices.OfferQueue.pendingSeat
     * @object
     * @description
     *
     * The object `OfferQueue.pendingSeat` groups methods
     * manipulating `PendingSeat` instances related to `OfferQueue`.
     *
     * Call {@link lbServices.OfferQueue#pendingSeat OfferQueue.pendingSeat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.OfferQueue#pendingSeat
         * @methodOf lbServices.OfferQueue
         *
         * @description
         *
         * Queries pendingSeat of OfferQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::get::OfferQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.pendingSeat#count
         * @methodOf lbServices.OfferQueue.pendingSeat
         *
         * @description
         *
         * Counts pendingSeat of OfferQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.pendingSeat.count = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::count::OfferQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.pendingSeat#create
         * @methodOf lbServices.OfferQueue.pendingSeat
         *
         * @description
         *
         * Creates a new instance in pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.create = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::create::OfferQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.pendingSeat#createMany
         * @methodOf lbServices.OfferQueue.pendingSeat
         *
         * @description
         *
         * Creates a new instance in pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.createMany = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::createMany::OfferQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.pendingSeat#destroyAll
         * @methodOf lbServices.OfferQueue.pendingSeat
         *
         * @description
         *
         * Deletes all pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendingSeat.destroyAll = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::delete::OfferQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.pendingSeat#destroyById
         * @methodOf lbServices.OfferQueue.pendingSeat
         *
         * @description
         *
         * Delete a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendingSeat.destroyById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::destroyById::OfferQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.pendingSeat#findById
         * @methodOf lbServices.OfferQueue.pendingSeat
         *
         * @description
         *
         * Find a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.findById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::findById::OfferQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.OfferQueue.pendingSeat#updateById
         * @methodOf lbServices.OfferQueue.pendingSeat
         *
         * @description
         *
         * Update a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Ride id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.updateById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::updateById::OfferQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RequestQueue
 * @header lbServices.RequestQueue
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RequestQueue` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RequestQueue",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RequestQueues/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RequestQueue.member() instead.
        "prototype$__get__member": {
          url: urlBase + "/RequestQueues/:id/member",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.join() instead.
        "prototype$__get__join": {
          url: urlBase + "/RequestQueues/:id/join",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.join.create() instead.
        "prototype$__create__join": {
          url: urlBase + "/RequestQueues/:id/join",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.join.update() instead.
        "prototype$__update__join": {
          url: urlBase + "/RequestQueues/:id/join",
          method: "PUT"
        },

        // INTERNAL. Use RequestQueue.join.destroy() instead.
        "prototype$__destroy__join": {
          url: urlBase + "/RequestQueues/:id/join",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.destination() instead.
        "prototype$__get__destination": {
          url: urlBase + "/RequestQueues/:id/destination",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.pickup() instead.
        "prototype$__get__pickup": {
          url: urlBase + "/RequestQueues/:id/pickup",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.requestQueue.findById() instead.
        "prototype$__findById__requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/requestQueue/:fk",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.requestQueue.destroyById() instead.
        "prototype$__destroyById__requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/requestQueue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.requestQueue.updateById() instead.
        "prototype$__updateById__requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/requestQueue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RequestQueue.request() instead.
        "prototype$__get__request": {
          url: urlBase + "/RequestQueues/:id/request",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.findById() instead.
        "prototype$__findById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/matchedSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.destroyById() instead.
        "prototype$__destroyById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/matchedSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.updateById() instead.
        "prototype$__updateById__matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/matchedSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.findById() instead.
        "prototype$__findById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/pendingSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.destroyById() instead.
        "prototype$__destroyById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/pendingSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.updateById() instead.
        "prototype$__updateById__pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/pendingSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RequestQueue.requestQueue() instead.
        "prototype$__get__requestQueue": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/requestQueue",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.requestQueue.create() instead.
        "prototype$__create__requestQueue": {
          url: urlBase + "/RequestQueues/:id/requestQueue",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.requestQueue.destroyAll() instead.
        "prototype$__delete__requestQueue": {
          url: urlBase + "/RequestQueues/:id/requestQueue",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.requestQueue.count() instead.
        "prototype$__count__requestQueue": {
          url: urlBase + "/RequestQueues/:id/requestQueue/count",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.matchedSeat() instead.
        "prototype$__get__matchedSeat": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/matchedSeat",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.create() instead.
        "prototype$__create__matchedSeat": {
          url: urlBase + "/RequestQueues/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.destroyAll() instead.
        "prototype$__delete__matchedSeat": {
          url: urlBase + "/RequestQueues/:id/matchedSeat",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.count() instead.
        "prototype$__count__matchedSeat": {
          url: urlBase + "/RequestQueues/:id/matchedSeat/count",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.pendingSeat() instead.
        "prototype$__get__pendingSeat": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/pendingSeat",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.create() instead.
        "prototype$__create__pendingSeat": {
          url: urlBase + "/RequestQueues/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.destroyAll() instead.
        "prototype$__delete__pendingSeat": {
          url: urlBase + "/RequestQueues/:id/pendingSeat",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.count() instead.
        "prototype$__count__pendingSeat": {
          url: urlBase + "/RequestQueues/:id/pendingSeat/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#create
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RequestQueues",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#createMany
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/RequestQueues",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#upsert
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RequestQueues",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#exists
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RequestQueues/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#findById
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RequestQueues/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#find
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RequestQueues",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#findOne
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RequestQueues/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#updateAll
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/RequestQueues/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#deleteById
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/RequestQueues/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#count
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RequestQueues/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#prototype$updateAttributes
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RequestQueues/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#createChangeStream
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/RequestQueues/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#possibleRequest
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `requestQ` – `{object=}` - 
         */
        "possibleRequest": {
          url: urlBase + "/RequestQueues/possibleRequest",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#removeRequest
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `requestQ` – `{object=}` - 
         */
        "removeRequest": {
          url: urlBase + "/RequestQueues/removeRequest",
          method: "POST"
        },

        // INTERNAL. Use Request.requestQueue.findById() instead.
        "::findById::request::requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/requestQueue/:fk",
          method: "GET"
        },

        // INTERNAL. Use Request.requestQueue.destroyById() instead.
        "::destroyById::request::requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/requestQueue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Request.requestQueue.updateById() instead.
        "::updateById::request::requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/requestQueue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Request.requestQueue() instead.
        "::get::request::requestQueue": {
          isArray: true,
          url: urlBase + "/requests/:id/requestQueue",
          method: "GET"
        },

        // INTERNAL. Use Request.requestQueue.create() instead.
        "::create::request::requestQueue": {
          url: urlBase + "/requests/:id/requestQueue",
          method: "POST"
        },

        // INTERNAL. Use Request.requestQueue.createMany() instead.
        "::createMany::request::requestQueue": {
          isArray: true,
          url: urlBase + "/requests/:id/requestQueue",
          method: "POST"
        },

        // INTERNAL. Use Request.requestQueue.destroyAll() instead.
        "::delete::request::requestQueue": {
          url: urlBase + "/requests/:id/requestQueue",
          method: "DELETE"
        },

        // INTERNAL. Use Request.requestQueue.count() instead.
        "::count::request::requestQueue": {
          url: urlBase + "/requests/:id/requestQueue/count",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.requestQueue.findById() instead.
        "::findById::RequestQueue::requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/requestQueue/:fk",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.requestQueue.destroyById() instead.
        "::destroyById::RequestQueue::requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/requestQueue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.requestQueue.updateById() instead.
        "::updateById::RequestQueue::requestQueue": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/requestQueue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RequestQueue.requestQueue() instead.
        "::get::RequestQueue::requestQueue": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/requestQueue",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.requestQueue.create() instead.
        "::create::RequestQueue::requestQueue": {
          url: urlBase + "/RequestQueues/:id/requestQueue",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.requestQueue.createMany() instead.
        "::createMany::RequestQueue::requestQueue": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/requestQueue",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.requestQueue.destroyAll() instead.
        "::delete::RequestQueue::requestQueue": {
          url: urlBase + "/RequestQueues/:id/requestQueue",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.requestQueue.count() instead.
        "::count::RequestQueue::requestQueue": {
          url: urlBase + "/RequestQueues/:id/requestQueue/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#updateOrCreate
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#update
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#destroyById
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#removeById
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RequestQueue#modelName
    * @propertyOf lbServices.RequestQueue
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RequestQueue`.
    */
    R.modelName = "RequestQueue";


        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#member
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Fetches belongsTo relation member.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Member` object.)
         * </em>
         */
        R.member = function() {
          var TargetResource = $injector.get("Member");
          var action = TargetResource["::get::RequestQueue::member"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RequestQueue.join
     * @header lbServices.RequestQueue.join
     * @object
     * @description
     *
     * The object `RequestQueue.join` groups methods
     * manipulating `Join` instances related to `RequestQueue`.
     *
     * Call {@link lbServices.RequestQueue#join RequestQueue.join()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#join
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Fetches hasOne relation join.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.join = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::get::RequestQueue::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.join#create
         * @methodOf lbServices.RequestQueue.join
         *
         * @description
         *
         * Creates a new instance in join of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.join.create = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::create::RequestQueue::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.join#createMany
         * @methodOf lbServices.RequestQueue.join
         *
         * @description
         *
         * Creates a new instance in join of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.join.createMany = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::createMany::RequestQueue::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.join#destroy
         * @methodOf lbServices.RequestQueue.join
         *
         * @description
         *
         * Deletes join of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.join.destroy = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::destroy::RequestQueue::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.join#update
         * @methodOf lbServices.RequestQueue.join
         *
         * @description
         *
         * Update join of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Join` object.)
         * </em>
         */
        R.join.update = function() {
          var TargetResource = $injector.get("Join");
          var action = TargetResource["::update::RequestQueue::join"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#destination
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Fetches belongsTo relation destination.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Destination` object.)
         * </em>
         */
        R.destination = function() {
          var TargetResource = $injector.get("Destination");
          var action = TargetResource["::get::RequestQueue::destination"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#pickup
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Fetches belongsTo relation pickup.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pickup` object.)
         * </em>
         */
        R.pickup = function() {
          var TargetResource = $injector.get("Pickup");
          var action = TargetResource["::get::RequestQueue::pickup"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RequestQueue.requestQueue
     * @header lbServices.RequestQueue.requestQueue
     * @object
     * @description
     *
     * The object `RequestQueue.requestQueue` groups methods
     * manipulating `RequestQueue` instances related to `RequestQueue`.
     *
     * Call {@link lbServices.RequestQueue#requestQueue RequestQueue.requestQueue()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#requestQueue
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Queries requestQueue of RequestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::get::RequestQueue::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.requestQueue#count
         * @methodOf lbServices.RequestQueue.requestQueue
         *
         * @description
         *
         * Counts requestQueue of RequestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.requestQueue.count = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::count::RequestQueue::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.requestQueue#create
         * @methodOf lbServices.RequestQueue.requestQueue
         *
         * @description
         *
         * Creates a new instance in requestQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue.create = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::create::RequestQueue::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.requestQueue#createMany
         * @methodOf lbServices.RequestQueue.requestQueue
         *
         * @description
         *
         * Creates a new instance in requestQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue.createMany = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::createMany::RequestQueue::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.requestQueue#destroyAll
         * @methodOf lbServices.RequestQueue.requestQueue
         *
         * @description
         *
         * Deletes all requestQueue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requestQueue.destroyAll = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::delete::RequestQueue::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.requestQueue#destroyById
         * @methodOf lbServices.RequestQueue.requestQueue
         *
         * @description
         *
         * Delete a related item by id for requestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for requestQueue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.requestQueue.destroyById = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::destroyById::RequestQueue::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.requestQueue#findById
         * @methodOf lbServices.RequestQueue.requestQueue
         *
         * @description
         *
         * Find a related item by id for requestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for requestQueue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue.findById = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::findById::RequestQueue::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.requestQueue#updateById
         * @methodOf lbServices.RequestQueue.requestQueue
         *
         * @description
         *
         * Update a related item by id for requestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for requestQueue
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RequestQueue` object.)
         * </em>
         */
        R.requestQueue.updateById = function() {
          var TargetResource = $injector.get("RequestQueue");
          var action = TargetResource["::updateById::RequestQueue::requestQueue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#request
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Fetches belongsTo relation request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.request = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::RequestQueue::request"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RequestQueue.matchedSeat
     * @header lbServices.RequestQueue.matchedSeat
     * @object
     * @description
     *
     * The object `RequestQueue.matchedSeat` groups methods
     * manipulating `MatchedSeat` instances related to `RequestQueue`.
     *
     * Call {@link lbServices.RequestQueue#matchedSeat RequestQueue.matchedSeat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#matchedSeat
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Queries matchedSeat of RequestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::get::RequestQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.matchedSeat#count
         * @methodOf lbServices.RequestQueue.matchedSeat
         *
         * @description
         *
         * Counts matchedSeat of RequestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.matchedSeat.count = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::count::RequestQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.matchedSeat#create
         * @methodOf lbServices.RequestQueue.matchedSeat
         *
         * @description
         *
         * Creates a new instance in matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.create = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::create::RequestQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.matchedSeat#createMany
         * @methodOf lbServices.RequestQueue.matchedSeat
         *
         * @description
         *
         * Creates a new instance in matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.createMany = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::createMany::RequestQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.matchedSeat#destroyAll
         * @methodOf lbServices.RequestQueue.matchedSeat
         *
         * @description
         *
         * Deletes all matchedSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.matchedSeat.destroyAll = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::delete::RequestQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.matchedSeat#destroyById
         * @methodOf lbServices.RequestQueue.matchedSeat
         *
         * @description
         *
         * Delete a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.matchedSeat.destroyById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::destroyById::RequestQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.matchedSeat#findById
         * @methodOf lbServices.RequestQueue.matchedSeat
         *
         * @description
         *
         * Find a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.findById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::findById::RequestQueue::matchedSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.matchedSeat#updateById
         * @methodOf lbServices.RequestQueue.matchedSeat
         *
         * @description
         *
         * Update a related item by id for matchedSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for matchedSeat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R.matchedSeat.updateById = function() {
          var TargetResource = $injector.get("MatchedSeat");
          var action = TargetResource["::updateById::RequestQueue::matchedSeat"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RequestQueue.pendingSeat
     * @header lbServices.RequestQueue.pendingSeat
     * @object
     * @description
     *
     * The object `RequestQueue.pendingSeat` groups methods
     * manipulating `PendingSeat` instances related to `RequestQueue`.
     *
     * Call {@link lbServices.RequestQueue#pendingSeat RequestQueue.pendingSeat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RequestQueue#pendingSeat
         * @methodOf lbServices.RequestQueue
         *
         * @description
         *
         * Queries pendingSeat of RequestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::get::RequestQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.pendingSeat#count
         * @methodOf lbServices.RequestQueue.pendingSeat
         *
         * @description
         *
         * Counts pendingSeat of RequestQueue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.pendingSeat.count = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::count::RequestQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.pendingSeat#create
         * @methodOf lbServices.RequestQueue.pendingSeat
         *
         * @description
         *
         * Creates a new instance in pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.create = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::create::RequestQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.pendingSeat#createMany
         * @methodOf lbServices.RequestQueue.pendingSeat
         *
         * @description
         *
         * Creates a new instance in pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.createMany = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::createMany::RequestQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.pendingSeat#destroyAll
         * @methodOf lbServices.RequestQueue.pendingSeat
         *
         * @description
         *
         * Deletes all pendingSeat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendingSeat.destroyAll = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::delete::RequestQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.pendingSeat#destroyById
         * @methodOf lbServices.RequestQueue.pendingSeat
         *
         * @description
         *
         * Delete a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendingSeat.destroyById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::destroyById::RequestQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.pendingSeat#findById
         * @methodOf lbServices.RequestQueue.pendingSeat
         *
         * @description
         *
         * Find a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.findById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::findById::RequestQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RequestQueue.pendingSeat#updateById
         * @methodOf lbServices.RequestQueue.pendingSeat
         *
         * @description
         *
         * Update a related item by id for pendingSeat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - request id
         *
         *  - `fk` – `{*}` - Foreign key for pendingSeat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R.pendingSeat.updateById = function() {
          var TargetResource = $injector.get("PendingSeat");
          var action = TargetResource["::updateById::RequestQueue::pendingSeat"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.MatchedSeat
 * @header lbServices.MatchedSeat
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `MatchedSeat` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "MatchedSeat",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/MatchedSeats/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use MatchedSeat.request() instead.
        "prototype$__get__request": {
          url: urlBase + "/MatchedSeats/:id/request",
          method: "GET"
        },

        // INTERNAL. Use MatchedSeat.ride() instead.
        "prototype$__get__ride": {
          url: urlBase + "/MatchedSeats/:id/ride",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#create
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/MatchedSeats",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#createMany
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/MatchedSeats",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#upsert
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/MatchedSeats",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#exists
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/MatchedSeats/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#findById
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/MatchedSeats/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#find
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/MatchedSeats",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#findOne
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/MatchedSeats/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#updateAll
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/MatchedSeats/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#deleteById
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/MatchedSeats/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#count
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/MatchedSeats/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#prototype$updateAttributes
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/MatchedSeats/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#createChangeStream
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/MatchedSeats/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#removeMatched
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `matchedS` – `{object=}` - 
         */
        "removeMatched": {
          url: urlBase + "/MatchedSeats/removeMatched",
          method: "POST"
        },

        // INTERNAL. Use Ride.matchedSeat.findById() instead.
        "::findById::Ride::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/matchedSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.matchedSeat.destroyById() instead.
        "::destroyById::Ride::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/matchedSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.matchedSeat.updateById() instead.
        "::updateById::Ride::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/matchedSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.matchedSeat() instead.
        "::get::Ride::matchedSeat": {
          isArray: true,
          url: urlBase + "/Rides/:id/matchedSeat",
          method: "GET"
        },

        // INTERNAL. Use Ride.matchedSeat.create() instead.
        "::create::Ride::matchedSeat": {
          url: urlBase + "/Rides/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use Ride.matchedSeat.createMany() instead.
        "::createMany::Ride::matchedSeat": {
          isArray: true,
          url: urlBase + "/Rides/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use Ride.matchedSeat.destroyAll() instead.
        "::delete::Ride::matchedSeat": {
          url: urlBase + "/Rides/:id/matchedSeat",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.matchedSeat.count() instead.
        "::count::Ride::matchedSeat": {
          url: urlBase + "/Rides/:id/matchedSeat/count",
          method: "GET"
        },

        // INTERNAL. Use Request.matchedSeat.findById() instead.
        "::findById::request::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/matchedSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Request.matchedSeat.destroyById() instead.
        "::destroyById::request::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/matchedSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Request.matchedSeat.updateById() instead.
        "::updateById::request::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/matchedSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Request.matchedSeat() instead.
        "::get::request::matchedSeat": {
          isArray: true,
          url: urlBase + "/requests/:id/matchedSeat",
          method: "GET"
        },

        // INTERNAL. Use Request.matchedSeat.create() instead.
        "::create::request::matchedSeat": {
          url: urlBase + "/requests/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use Request.matchedSeat.createMany() instead.
        "::createMany::request::matchedSeat": {
          isArray: true,
          url: urlBase + "/requests/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use Request.matchedSeat.destroyAll() instead.
        "::delete::request::matchedSeat": {
          url: urlBase + "/requests/:id/matchedSeat",
          method: "DELETE"
        },

        // INTERNAL. Use Request.matchedSeat.count() instead.
        "::count::request::matchedSeat": {
          url: urlBase + "/requests/:id/matchedSeat/count",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.findById() instead.
        "::findById::OfferQueue::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/matchedSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.destroyById() instead.
        "::destroyById::OfferQueue::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/matchedSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.updateById() instead.
        "::updateById::OfferQueue::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/matchedSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OfferQueue.matchedSeat() instead.
        "::get::OfferQueue::matchedSeat": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/matchedSeat",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.create() instead.
        "::create::OfferQueue::matchedSeat": {
          url: urlBase + "/OfferQueues/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.createMany() instead.
        "::createMany::OfferQueue::matchedSeat": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.destroyAll() instead.
        "::delete::OfferQueue::matchedSeat": {
          url: urlBase + "/OfferQueues/:id/matchedSeat",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.matchedSeat.count() instead.
        "::count::OfferQueue::matchedSeat": {
          url: urlBase + "/OfferQueues/:id/matchedSeat/count",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.findById() instead.
        "::findById::RequestQueue::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/matchedSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.destroyById() instead.
        "::destroyById::RequestQueue::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/matchedSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.updateById() instead.
        "::updateById::RequestQueue::matchedSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/matchedSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RequestQueue.matchedSeat() instead.
        "::get::RequestQueue::matchedSeat": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/matchedSeat",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.create() instead.
        "::create::RequestQueue::matchedSeat": {
          url: urlBase + "/RequestQueues/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.createMany() instead.
        "::createMany::RequestQueue::matchedSeat": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/matchedSeat",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.destroyAll() instead.
        "::delete::RequestQueue::matchedSeat": {
          url: urlBase + "/RequestQueues/:id/matchedSeat",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.matchedSeat.count() instead.
        "::count::RequestQueue::matchedSeat": {
          url: urlBase + "/RequestQueues/:id/matchedSeat/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#updateOrCreate
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#update
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#destroyById
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#removeById
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `MatchedSeat` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.MatchedSeat#modelName
    * @propertyOf lbServices.MatchedSeat
    * @description
    * The name of the model represented by this $resource,
    * i.e. `MatchedSeat`.
    */
    R.modelName = "MatchedSeat";


        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#request
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Fetches belongsTo relation request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.request = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::MatchedSeat::request"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.MatchedSeat#ride
         * @methodOf lbServices.MatchedSeat
         *
         * @description
         *
         * Fetches belongsTo relation ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.ride = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::MatchedSeat::ride"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.PendingSeat
 * @header lbServices.PendingSeat
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PendingSeat` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PendingSeat",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PendingSeats/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use PendingSeat.request() instead.
        "prototype$__get__request": {
          url: urlBase + "/PendingSeats/:id/request",
          method: "GET"
        },

        // INTERNAL. Use PendingSeat.ride() instead.
        "prototype$__get__ride": {
          url: urlBase + "/PendingSeats/:id/ride",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#create
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PendingSeats",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#createMany
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/PendingSeats",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#upsert
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PendingSeats",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#exists
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/PendingSeats/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#findById
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PendingSeats/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#find
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/PendingSeats",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#findOne
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PendingSeats/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#updateAll
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/PendingSeats/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#deleteById
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/PendingSeats/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#count
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/PendingSeats/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#prototype$updateAttributes
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PendingSeats/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#createChangeStream
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/PendingSeats/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#addPending
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `pendingS` – `{object=}` - 
         */
        "addPending": {
          url: urlBase + "/PendingSeats/addPending",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#removePending
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `pendingS` – `{object=}` - 
         */
        "removePending": {
          url: urlBase + "/PendingSeats/removePending",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#toMatchedSeat
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `pendingS` – `{object=}` - 
         */
        "toMatchedSeat": {
          url: urlBase + "/PendingSeats/toMatchedSeat",
          method: "POST"
        },

        // INTERNAL. Use Ride.pendingSeat.findById() instead.
        "::findById::Ride::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/pendingSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Ride.pendingSeat.destroyById() instead.
        "::destroyById::Ride::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/pendingSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.pendingSeat.updateById() instead.
        "::updateById::Ride::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Rides/:id/pendingSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Ride.pendingSeat() instead.
        "::get::Ride::pendingSeat": {
          isArray: true,
          url: urlBase + "/Rides/:id/pendingSeat",
          method: "GET"
        },

        // INTERNAL. Use Ride.pendingSeat.create() instead.
        "::create::Ride::pendingSeat": {
          url: urlBase + "/Rides/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use Ride.pendingSeat.createMany() instead.
        "::createMany::Ride::pendingSeat": {
          isArray: true,
          url: urlBase + "/Rides/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use Ride.pendingSeat.destroyAll() instead.
        "::delete::Ride::pendingSeat": {
          url: urlBase + "/Rides/:id/pendingSeat",
          method: "DELETE"
        },

        // INTERNAL. Use Ride.pendingSeat.count() instead.
        "::count::Ride::pendingSeat": {
          url: urlBase + "/Rides/:id/pendingSeat/count",
          method: "GET"
        },

        // INTERNAL. Use Request.pendingSeat.findById() instead.
        "::findById::request::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/pendingSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Request.pendingSeat.destroyById() instead.
        "::destroyById::request::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/pendingSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Request.pendingSeat.updateById() instead.
        "::updateById::request::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/requests/:id/pendingSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Request.pendingSeat() instead.
        "::get::request::pendingSeat": {
          isArray: true,
          url: urlBase + "/requests/:id/pendingSeat",
          method: "GET"
        },

        // INTERNAL. Use Request.pendingSeat.create() instead.
        "::create::request::pendingSeat": {
          url: urlBase + "/requests/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use Request.pendingSeat.createMany() instead.
        "::createMany::request::pendingSeat": {
          isArray: true,
          url: urlBase + "/requests/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use Request.pendingSeat.destroyAll() instead.
        "::delete::request::pendingSeat": {
          url: urlBase + "/requests/:id/pendingSeat",
          method: "DELETE"
        },

        // INTERNAL. Use Request.pendingSeat.count() instead.
        "::count::request::pendingSeat": {
          url: urlBase + "/requests/:id/pendingSeat/count",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.findById() instead.
        "::findById::OfferQueue::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/pendingSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.destroyById() instead.
        "::destroyById::OfferQueue::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/pendingSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.updateById() instead.
        "::updateById::OfferQueue::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/OfferQueues/:id/pendingSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use OfferQueue.pendingSeat() instead.
        "::get::OfferQueue::pendingSeat": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/pendingSeat",
          method: "GET"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.create() instead.
        "::create::OfferQueue::pendingSeat": {
          url: urlBase + "/OfferQueues/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.createMany() instead.
        "::createMany::OfferQueue::pendingSeat": {
          isArray: true,
          url: urlBase + "/OfferQueues/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.destroyAll() instead.
        "::delete::OfferQueue::pendingSeat": {
          url: urlBase + "/OfferQueues/:id/pendingSeat",
          method: "DELETE"
        },

        // INTERNAL. Use OfferQueue.pendingSeat.count() instead.
        "::count::OfferQueue::pendingSeat": {
          url: urlBase + "/OfferQueues/:id/pendingSeat/count",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.findById() instead.
        "::findById::RequestQueue::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/pendingSeat/:fk",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.destroyById() instead.
        "::destroyById::RequestQueue::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/pendingSeat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.updateById() instead.
        "::updateById::RequestQueue::pendingSeat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RequestQueues/:id/pendingSeat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RequestQueue.pendingSeat() instead.
        "::get::RequestQueue::pendingSeat": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/pendingSeat",
          method: "GET"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.create() instead.
        "::create::RequestQueue::pendingSeat": {
          url: urlBase + "/RequestQueues/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.createMany() instead.
        "::createMany::RequestQueue::pendingSeat": {
          isArray: true,
          url: urlBase + "/RequestQueues/:id/pendingSeat",
          method: "POST"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.destroyAll() instead.
        "::delete::RequestQueue::pendingSeat": {
          url: urlBase + "/RequestQueues/:id/pendingSeat",
          method: "DELETE"
        },

        // INTERNAL. Use RequestQueue.pendingSeat.count() instead.
        "::count::RequestQueue::pendingSeat": {
          url: urlBase + "/RequestQueues/:id/pendingSeat/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#updateOrCreate
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#update
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#destroyById
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#removeById
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PendingSeat` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.PendingSeat#modelName
    * @propertyOf lbServices.PendingSeat
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PendingSeat`.
    */
    R.modelName = "PendingSeat";


        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#request
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Fetches belongsTo relation request.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Request` object.)
         * </em>
         */
        R.request = function() {
          var TargetResource = $injector.get("Request");
          var action = TargetResource["::get::PendingSeat::request"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.PendingSeat#ride
         * @methodOf lbServices.PendingSeat
         *
         * @description
         *
         * Fetches belongsTo relation ride.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ride` object.)
         * </em>
         */
        R.ride = function() {
          var TargetResource = $injector.get("Ride");
          var action = TargetResource["::get::PendingSeat::ride"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);

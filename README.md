# zendesk-tagger

An app to tag your tickets on zendesk for you.

Currently tags facebook tickets with the facebook page they came from.

## Installation

Run `npm install`, copy config.sample.yml to config.yml and fill it out, and
type `npm start` to run it.

## Configuring through Zendesk

To get this working, you need to fill in your API details in config.yml. Then,
you need to tell Zendesk to send stuff to the app:

### Creating an extension

In Settings, go into Extensions. Then, click "add target" and select "URL
target". Pick a title, enter the URL where your app is running, and select
POST. Set to attribute name to anything; we don't use it.

Save the extension. Testing it won't output anything but shouldn't error,
either.

### Creating a trigger

In Settings, go into Triggers. Then, click "add trigger". Pick a title, and
then enter the following conditions:

![](http://i.imgur.com/2PIROK7.png)

The action should be "Notifications: Notify target" with your extension as the
name. It doesn't matter what the message is because we don't use it, but you
have to set one.

## License

Released under the MIT license.

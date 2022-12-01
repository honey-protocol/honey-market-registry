## This is a simple walkthrough of the oracle creation

[Open Switchboard](https://app.switchboard.xyz/)

Click the NFT Oracle starter
![NFT Oracle Starter](./nft_oracle_starter.png)

Click one of the starter collections. It doesnt matter too much which one is selection, as we are using this as a template
![Oracle Template](./example_oracle_selection.png)

To the right, click configure feeds
![Configure Feeds](./configure_feeds.png)

Now click the the dots (...) to expand the dropdown and edit the feeds
![Edit Feeds](./edit_jobs.png)
![Edit Feed Popup](./edit_feed_popup.png)

Next we edit the oracle feed to point to the collection of our choice
![Collection Feed Edit](./magic_eden_feed_edit.png)

The feed is also in USD, not SOL, so we need to supply a multiply task with the aggregator key of the SOL/USD feed to convert to SOL.

![Multiply](./multiply_test.png)
![Multiply field](./multiply_field.png)
![Multiply Aggregator](./multiply_aggregator.png)

Lastly, setup the config of your oracle however you like, or use the Honey specification here.
![Example Config](./example_configs.png)

One the oracle page, we also need to add a 12 hour feed of data storage such that we can do the TWAP in the next step.

![Data Storage](./track_feed_history.png)

Done!

## TWAP Oracle setup

We need to average the price of the collection over the last 12 hours to smooth out the value of collections in times of volatility

This oracle is pretty simpel so we can create from scratch
![Create from scratch](./create_from_scratch.png)

Then add a TWAP task on the left
![TWAP Task](./twap_task.png)

Lastly fill out the TWAP config with the aggregator key of your first oracle
![TWAP Config](./twap_job_config.png)

Done!

## Now use the TWAP oracle in the creation of your market

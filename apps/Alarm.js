import React from 'react';

const Alarm = (props) => {
	console.log('app props', props.configs);

	const BR = props.bluerain;

	const Text = BR.Components.get('Text');
	return <Text>Alarm</Text>;
};

Alarm.appName = 'Alarm';
Alarm.slug = 'alarm';
// Alarm.iconUrl = 'https://s3-us-west-2.amazonaws.com/bluerainimages/mevris-logo.svg';
Alarm.iconUrl = 'https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_alarm_black_24px.svg';

module.exports = Alarm;
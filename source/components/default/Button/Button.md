```
<Button
	content='Default'
	onPress={() => console.log('Pressed')}
/>
```

```
<Button
	rounded
	content='Rounded'
	onPress={() => console.log('Pressed')}
/>
```

```
<Button
	rounded={500}
	width='50%'
	content='Even more Rounded'
/>
```

#### Disabled
A disabled button does not trigger any events

```
	<Button
		disabled
		content='Disabled'
		onPress={() => console.log('Pressed')}
	/>
```
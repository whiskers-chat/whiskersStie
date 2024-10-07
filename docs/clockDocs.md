# Clock

Clock is a bot made by `@Finley224`, it can be used to tell the time & date.

## Command Basics

The basic format of a clock command is `@Clock command arg1 arg2 ...`. If a
command does not succeed, a error message will be returned, it will look
something
like:<br>`Oh no, something went wrong. Contact support@whiskers.chat with this message and a time stamp so we can look into it.`.

## Ping

This command checks if the bot is online, when used, the bot should return
`pong!`.

##### Args

This command has no args

##### Examples

- `@clock ping`

## Search

::: tip 
The time zone that is being searched must not have spaces. When the bot
sees a space, it assumes it is another argument and it will be not be included
in the search query. 
::: 

This command searches for valid timezones, when used, the bot should return a list of timezones it found.

##### Args

| Index | Type   | Description            |
| ----- | ------ | ---------------------- |
| 1     | string | a string to search for |

##### Examples

- `@clock search new`
- `@clock search ETC`

## getTime

::: tip 
This command can also be called as `time`. 
::: 
This command gets the
time in a timezone, when used this command should return the time in that time
zone.

##### Args

| Index | Type   | Description                                                          | Required |
| ----- | ------ | -------------------------------------------------------------------- | -------- |
| 1     | string | The time zone to get the time for, if not provided UTC is used.      | No       |
| 2     | number | The format the time should be returned in, defaults to 12 hour time. | No       |

##### Examples

- `@clock time America/Juneau 24`
- `@clock getTime America/New_York`
- `@clock time`

## getDate

::: tip 
This command can also be called as `date`.
::: 
This command gets the
date in a timezone, when used this command should return the date in that time
zone.

##### Args

| Index | Type   | Description                                                          | Required |
| ----- | ------ | -------------------------------------------------------------------- | -------- |
| 1     | string | The time zone to get the date for, if not provided UTC is used.      | No       |
| 2     | number | The format the date should be returned in, defaults to 12 hour time. | No       |

##### Examples

- `@clock date Etc/GMT+1 24`
- `@clock getDate America/New_York`
- `@clock date`

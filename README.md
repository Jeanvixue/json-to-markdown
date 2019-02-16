# json-to-markdown
description in markdown format for a json object

# usage
node index.js -f path/to/your/file/name/to/describe

# example

data in
```
{
    "conclusion": "OK", 
    "repairStatus": "Reviewed Passed", 
    "testStatus": "Reviewed Passed", 
    "numberOfDefects": 5, 
    "numberOfIndictedPins": 2, 
    "numberOfJointsTested": 58, 
    "numberOfComponentsTested": 4, 
    "testerTestEndTime": "2016-11-08 10:31:03", 
    "testerTestStartTime": "2016-11-08 10:29:49", 
    "testTime": "2016-11-08 10:29:49", 
    "assemblyRevision": "RD-QT012A-V1-A50_CSP", 
    "boardRevision": "1478572263000", 
    "boardType": "RD-QT012A-V1-A50_CSP", 
    "imageId": 1, 
    "serialNumber": "DEMO38", 
    "stage": "v810", 
    "testerName": "V810-3164S2", 
    "numberOfVariationOkPins": 0, 
    "numberOfVariationOkComponents": 0, 
    "numberOfVariationOkDefects": 0, 
    "numberOfRepairLaterPins": 0, 
    "numberOfRepairLaterComponents": 0, 
    "numberOfRepairLaterDefects": 0, 
    "numberOfRepairedPins": 0, 
    "numberOfRepairedComponents": 0, 
    "numberOfRepairedDefects": 0, 
    "numberOfFalseCalledPins": 2, 
    "numberOfFalseCalledComponents": 0, 
    "numberOfFalseCalledDefects": 5, 
    "numberOfActivePins": 0, 
    "numberOfActiveComponents": 0, 
    "numberOfActiveDefects": 0, 
    "repairOperator": "s", 
    "repairStartTime": "2016-11-08 10:32:20", 
    "repairEndTime": "2016-11-08 10:32:25", 
    "repairEntries": [
        {
            "name": "top:1:J2:7", 
            "imageFileName": "", 
            "imageFullFileName": "", 
            "jointType": "singlePad", 
            "subType": "2_1", 
            "algorithm": "singlePad", 
            "indictmentType": "Voiding, Individual Voiding", 
            "repairStatus": "False Call", 
            "repairOperator": "s", 
            "repairIndictmentType": "Voiding, Individual Voiding", 
            "comment": "-", 
            "repairActionType": "-", 
            "repairTime": "2016-11-08 10:32:22", 
            "packageId": "2_1", 
            "pin": 7, 
            "designator": "J2", 
            "measurements": [ ]
        }, 
        {
            "name": "top:1:J3:7", 
            "imageFileName": "", 
            "imageFullFileName": "", 
            "jointType": "singlePad", 
            "subType": "3_3", 
            "algorithm": "singlePad", 
            "indictmentType": "Insufficient, Insufficient, Open", 
            "repairStatus": "False Call", 
            "repairOperator": "s", 
            "repairIndictmentType": "Insufficient, Insufficient, Open", 
            "comment": "-", 
            "repairActionType": "-", 
            "repairTime": "2016-11-08 10:32:23", 
            "packageId": "3_3", 
            "pin": 7, 
            "designator": "J3", 
            "measurements": [ ]
        }
    ], 
    "failureEntries": [ ], 
    "path": "d:\\test\\reviewed passed.xml", 
    "all": [ ]
}
```

and output is 

### Body

field name | description | type | sample
---|---|---|---
conclusion||string|OK
repairStatus||string|Reviewed Passed
testStatus||string|Reviewed Passed
numberOfDefects||number|5
numberOfIndictedPins||number|2
numberOfJointsTested||number|58
numberOfComponentsTested||number|4
testerTestEndTime||string|2016-11-08 10:31:03
testerTestStartTime||string|2016-11-08 10:29:49
testTime||string|2016-11-08 10:29:49
assemblyRevision||string|RD-QT012A-V1-A50_CSP
boardRevision||string|1478572263000
boardType||string|RD-QT012A-V1-A50_CSP
imageId||number|1
serialNumber||string|DEMO38
stage||string|v810
testerName||string|V810-3164S2
numberOfVariationOkPins||number|0
numberOfVariationOkComponents||number|0
numberOfVariationOkDefects||number|0
numberOfRepairLaterPins||number|0
numberOfRepairLaterComponents||number|0
numberOfRepairLaterDefects||number|0
numberOfRepairedPins||number|0
numberOfRepairedComponents||number|0
numberOfRepairedDefects||number|0
numberOfFalseCalledPins||number|2
numberOfFalseCalledComponents||number|0
numberOfFalseCalledDefects||number|5
numberOfActivePins||number|0
numberOfActiveComponents||number|0
numberOfActiveDefects||number|0
repairOperator||string|s
repairStartTime||string|2016-11-08 10:32:20
repairEndTime||string|2016-11-08 10:32:25
repairEntries|[repairEntries](#repairEntries)|array
failureEntries|[failureEntries](#failureEntries)|array
path||string|d:\test\reviewed passed.xml
all|[all](#all)|array
### repairEntries

field name | description | type | sample
---|---|---|---
name||string|top:1:J3:7
imageFileName||string|
imageFullFileName||string|
jointType||string|singlePad
subType||string|3_3
algorithm||string|singlePad
indictmentType||string|Insufficient, Insufficient, Open
repairStatus||string|False Call
repairOperator||string|s
repairIndictmentType||string|Insufficient, Insufficient, Open
comment||string|-
repairActionType||string|-
repairTime||string|2016-11-08 10:32:23
packageId||string|3_3
pin||number|7
designator||string|J3
measurements|[measurements](#measurements)|array
### repairEntries

field name | description | type | sample
---|---|---|---
name||string|top:1:J2:7
imageFileName||string|
imageFullFileName||string|
jointType||string|singlePad
subType||string|2_1
algorithm||string|singlePad
indictmentType||string|Voiding, Individual Voiding
repairStatus||string|False Call
repairOperator||string|s
repairIndictmentType||string|Voiding, Individual Voiding
comment||string|-
repairActionType||string|-
repairTime||string|2016-11-08 10:32:22
packageId||string|2_1
pin||number|7
designator||string|J2
measurements|[measurements](#measurements)|array

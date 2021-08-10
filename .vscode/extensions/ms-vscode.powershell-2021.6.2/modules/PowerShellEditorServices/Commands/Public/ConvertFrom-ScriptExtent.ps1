# Copyright (c) Microsoft Corporation.
# Licensed under the MIT License.

function ConvertFrom-ScriptExtent {
    <#
    .EXTERNALHELP ..\PowerShellEditorServices.Commands-help.xml
    #>
    [CmdletBinding()]
    [OutputType([Microsoft.PowerShell.EditorServices.Extensions.IFileRange, Microsoft.PowerShell.EditorServices],    ParameterSetName='BufferRange')]
    [OutputType([Microsoft.PowerShell.EditorServices.Extensions.IFilePosition, Microsoft.PowerShell.EditorServices], ParameterSetName='BufferPosition')]
    param(
        [Parameter(Mandatory, ValueFromPipeline, ValueFromPipelineByPropertyName)]
        [ValidateNotNullOrEmpty()]
        [System.Management.Automation.Language.IScriptExtent[]]
        $Extent,

        [Parameter(ParameterSetName='BufferRange')]
        [switch]
        $BufferRange,

        [Parameter(ParameterSetName='BufferPosition')]
        [switch]
        $BufferPosition,

        [Parameter(ParameterSetName='BufferPosition')]
        [switch]
        $Start,

        [Parameter(ParameterSetName='BufferPosition')]
        [switch]
        $End
    )
    process {
        foreach ($aExtent in $Extent) {
            switch ($PSCmdlet.ParameterSetName) {
                BufferRange {
                    # yield
                    [Microsoft.PowerShell.EditorServices.Extensions.FileRange, Microsoft.PowerShell.EditorServices]::new(
                        $aExtent.StartLineNumber,
                        $aExtent.StartColumnNumber,
                        $aExtent.EndLineNumber,
                        $aExtent.EndColumnNumber)
                }
                BufferPosition {
                    if ($End) {
                        $line   = $aExtent.EndLineNumber
                        $column = $aExtent.EndLineNumber
                    } else {
                        $line   = $aExtent.StartLineNumber
                        $column = $aExtent.StartLineNumber
                    }
                    # yield
                    [Microsoft.PowerShell.EditorServices.Extensions.FileRange, Microsoft.PowerShell.EditorServices]::new(
                        $line,
                        $column)
                }
            }
        }
    }
}

# SIG # Begin signature block
# MIIjowYJKoZIhvcNAQcCoIIjlDCCI5ACAQExDzANBglghkgBZQMEAgEFADB5Bgor
# BgEEAYI3AgEEoGswaTA0BgorBgEEAYI3AgEeMCYCAwEAAAQQH8w7YFlLCE63JNLG
# KX7zUQIBAAIBAAIBAAIBAAIBADAxMA0GCWCGSAFlAwQCAQUABCBPKxil1U4JnRPS
# QyqUqw0RKxJ6fsZihk0k1ECh3hKbp6CCDYUwggYDMIID66ADAgECAhMzAAAB4HFz
# JMpcmPgZAAAAAAHgMA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNVBAYTAlVTMRMwEQYD
# VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
# b3NvZnQgQ29ycG9yYXRpb24xKDAmBgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25p
# bmcgUENBIDIwMTEwHhcNMjAxMjE1MjEzMTQ2WhcNMjExMjAyMjEzMTQ2WjB0MQsw
# CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
# ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMR4wHAYDVQQDExVNaWNy
# b3NvZnQgQ29ycG9yYXRpb24wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
# AQDRXpc9eiGRI/2BlmU7OMiQPTKpNlluodjT2rltPO/Gk47bH4gBShPMD4BX/4sg
# NvvBun6ZOG2dxUW30myWoUJJ0iRbTAv2JFzjSpVQvPE+D5vtmdu6WlOR2ahF4leF
# 5Vvk4lPg2ZFrqg5LNwT9gjwuYgmih+G2KwT8NMWusBhO649F4Ku6B6QgA+vZld5S
# G2XWIdvS0pmpmn/HFrV4eYTsl9HYgjn/bPsAlfWolLlEXYTaCljK7q7bQHDBrzlR
# ukyyryFpPOR9Wx1cxFJ6KBqg2jlJpzxjN3udNJPOqarnQIVgB8DUm3I5g2v5xTHK
# Ovz9ucN21467cYcIxjPC4UkDAgMBAAGjggGCMIIBfjAfBgNVHSUEGDAWBgorBgEE
# AYI3TAgBBggrBgEFBQcDAzAdBgNVHQ4EFgQUVBWIZHrG4UIX3uX4142l+8GsPXAw
# VAYDVR0RBE0wS6RJMEcxLTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5kIE9wZXJh
# dGlvbnMgTGltaXRlZDEWMBQGA1UEBRMNMjMwMDEyKzQ2MzAxMDAfBgNVHSMEGDAW
# gBRIbmTlUAXTgqoXNzcitW2oynUClTBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8v
# d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNDb2RTaWdQQ0EyMDExXzIw
# MTEtMDctMDguY3JsMGEGCCsGAQUFBwEBBFUwUzBRBggrBgEFBQcwAoZFaHR0cDov
# L3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9jZXJ0cy9NaWNDb2RTaWdQQ0EyMDEx
# XzIwMTEtMDctMDguY3J0MAwGA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQELBQADggIB
# AE5msNzmYzYbNgpnhya6YsrM+CIC8CXDu10nwzZtkgQciPOOqAYmFcWJCwD5VZzs
# qFwad8XIOrfCylWf4hzn09mD87yuazpuCstLSqfDLNd3740+254vEZqdGxOglAGU
# ih2IiF8S0GDwucpLGzt/OLXPFr/d4MWxPuX0L+HB5lA3Y/CJE673dHGQW2DELdqt
# ohtkhp+oWFn1hNDDZ3LP++HEZvA7sI/o/981Sh4kaGayOp6oEiQuGeCXyfrIC9KX
# eew0UlYX/NHVDqr4ykKkqpHtzbUbuo7qovUHPbYKcRGWrrEtBS5SPLFPumqsRtzb
# LgU9HqfRAN36bMsd2qynGyWBVFOM7NMs2lTCGM85Z/Fdzv/8tnYT36Cmbue+IM+6
# kS86j6Ztmx0VIFWbOvNsASPT6yrmYiecJiP6H0TrYXQK5B3jE8s53l+t61ab0Eul
# 7DAxNWX3lAiUlzKs3qZYQEK1LFvgbdTXtBRnHgBdABALK3RPrieIYqPln9sAmg3/
# zJZi4C/c2cWGF6WwK/w1Nzw08pj7jaaZZVBpCeDe+y7oM26QIXxracot7zJ21/TL
# 70biK36YybSUDkjhQPP/uxT0yebLNBKk7g8V98Wna2MsHWwk0sgqpkjIp02TrkVz
# 26tcF2rml2THRSDrwpBa4x9c8rM8Qomiyeh2tEJnsx2LMIIHejCCBWKgAwIBAgIK
# YQ6Q0gAAAAAAAzANBgkqhkiG9w0BAQsFADCBiDELMAkGA1UEBhMCVVMxEzARBgNV
# BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
# c29mdCBDb3Jwb3JhdGlvbjEyMDAGA1UEAxMpTWljcm9zb2Z0IFJvb3QgQ2VydGlm
# aWNhdGUgQXV0aG9yaXR5IDIwMTEwHhcNMTEwNzA4MjA1OTA5WhcNMjYwNzA4MjEw
# OTA5WjB+MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
# BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYD
# VQQDEx9NaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQSAyMDExMIICIjANBgkqhkiG
# 9w0BAQEFAAOCAg8AMIICCgKCAgEAq/D6chAcLq3YbqqCEE00uvK2WCGfQhsqa+la
# UKq4BjgaBEm6f8MMHt03a8YS2AvwOMKZBrDIOdUBFDFC04kNeWSHfpRgJGyvnkmc
# 6Whe0t+bU7IKLMOv2akrrnoJr9eWWcpgGgXpZnboMlImEi/nqwhQz7NEt13YxC4D
# dato88tt8zpcoRb0RrrgOGSsbmQ1eKagYw8t00CT+OPeBw3VXHmlSSnnDb6gE3e+
# lD3v++MrWhAfTVYoonpy4BI6t0le2O3tQ5GD2Xuye4Yb2T6xjF3oiU+EGvKhL1nk
# kDstrjNYxbc+/jLTswM9sbKvkjh+0p2ALPVOVpEhNSXDOW5kf1O6nA+tGSOEy/S6
# A4aN91/w0FK/jJSHvMAhdCVfGCi2zCcoOCWYOUo2z3yxkq4cI6epZuxhH2rhKEmd
# X4jiJV3TIUs+UsS1Vz8kA/DRelsv1SPjcF0PUUZ3s/gA4bysAoJf28AVs70b1FVL
# 5zmhD+kjSbwYuER8ReTBw3J64HLnJN+/RpnF78IcV9uDjexNSTCnq47f7Fufr/zd
# sGbiwZeBe+3W7UvnSSmnEyimp31ngOaKYnhfsi+E11ecXL93KCjx7W3DKI8sj0A3
# T8HhhUSJxAlMxdSlQy90lfdu+HggWCwTXWCVmj5PM4TasIgX3p5O9JawvEagbJjS
# 4NaIjAsCAwEAAaOCAe0wggHpMBAGCSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBRI
# bmTlUAXTgqoXNzcitW2oynUClTAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTAL
# BgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBRyLToCMZBD
# uRQFTuHqp8cx0SOJNDBaBgNVHR8EUzBRME+gTaBLhklodHRwOi8vY3JsLm1pY3Jv
# c29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNSb29DZXJBdXQyMDExXzIwMTFf
# MDNfMjIuY3JsMF4GCCsGAQUFBwEBBFIwUDBOBggrBgEFBQcwAoZCaHR0cDovL3d3
# dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNSb29DZXJBdXQyMDExXzIwMTFf
# MDNfMjIuY3J0MIGfBgNVHSAEgZcwgZQwgZEGCSsGAQQBgjcuAzCBgzA/BggrBgEF
# BQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9kb2NzL3ByaW1h
# cnljcHMuaHRtMEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEAbABfAHAAbwBsAGkA
# YwB5AF8AcwB0AGEAdABlAG0AZQBuAHQALiAdMA0GCSqGSIb3DQEBCwUAA4ICAQBn
# 8oalmOBUeRou09h0ZyKbC5YR4WOSmUKWfdJ5DJDBZV8uLD74w3LRbYP+vj/oCso7
# v0epo/Np22O/IjWll11lhJB9i0ZQVdgMknzSGksc8zxCi1LQsP1r4z4HLimb5j0b
# pdS1HXeUOeLpZMlEPXh6I/MTfaaQdION9MsmAkYqwooQu6SpBQyb7Wj6aC6VoCo/
# KmtYSWMfCWluWpiW5IP0wI/zRive/DvQvTXvbiWu5a8n7dDd8w6vmSiXmE0OPQvy
# CInWH8MyGOLwxS3OW560STkKxgrCxq2u5bLZ2xWIUUVYODJxJxp/sfQn+N4sOiBp
# mLJZiWhub6e3dMNABQamASooPoI/E01mC8CzTfXhj38cbxV9Rad25UAqZaPDXVJi
# hsMdYzaXht/a8/jyFqGaJ+HNpZfQ7l1jQeNbB5yHPgZ3BtEGsXUfFL5hYbXw3MYb
# BL7fQccOKO7eZS/sl/ahXJbYANahRr1Z85elCUtIEJmAH9AAKcWxm6U/RXceNcbS
# oqKfenoi+kiVH6v7RyOA9Z74v2u3S5fi63V4GuzqN5l5GEv/1rMjaHXmr/r8i+sL
# gOppO6/8MO0ETI7f33VtY5E90Z1WTk+/gFcioXgRMiF670EKsT/7qMykXcGhiJtX
# cVZOSEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFXQwghVwAgEBMIGVMH4x
# CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
# b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAmBgNVBAMTH01p
# Y3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBIDIwMTECEzMAAAHgcXMkylyY+BkAAAAA
# AeAwDQYJYIZIAWUDBAIBBQCgga4wGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcCAQQw
# HAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIK4/
# 5I8fIFzVsF+1m770kKJ3FjDZS+ZNvbZeAbFH/Nn6MEIGCisGAQQBgjcCAQwxNDAy
# oBSAEgBNAGkAYwByAG8AcwBvAGYAdKEagBhodHRwOi8vd3d3Lm1pY3Jvc29mdC5j
# b20wDQYJKoZIhvcNAQEBBQAEggEAA2GU0sSKhy0iR/h5TGyBoXT+FJcwtNjNYW/H
# d8npBmi7ay8KinmcjP7krRaSZcAIzlLToj2TacXSqmOCoy3l27KdO7bGZq5pCZMN
# 0ltUfGRtiV6ihdEBHAfLD/seYM9x1RBJNi+qESD6++X7JDuZeIyFfLKqtz5MaNZp
# tdGCHDG614gy4iAEiVYnEOkKyTUaB5jNkbSRX7hlnS+ec7oIsW2LC8/e0DyLwNlb
# G6CmbS7wvs+Bftf57559d5ocz5rtDyHxpjm3FDDEQnN0rg8Kbq7Z3EIdHDw7mcyI
# yB4zfbNH9NYm1jiHXpbRKLY0w1/sckUcfJcX3wm+2o9TD3pHJqGCEv4wghL6Bgor
# BgEEAYI3AwMBMYIS6jCCEuYGCSqGSIb3DQEHAqCCEtcwghLTAgEDMQ8wDQYJYIZI
# AWUDBAIBBQAwggFZBgsqhkiG9w0BCRABBKCCAUgEggFEMIIBQAIBAQYKKwYBBAGE
# WQoDATAxMA0GCWCGSAFlAwQCAQUABCBU41EofrA73oldQH0SP0zLT2KD0sBrE370
# lRQ0sfg3awIGYLDiX6F8GBMyMDIxMDYyMzE5MTE0MS4xODFaMASAAgH0oIHYpIHV
# MIHSMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
# UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMS0wKwYDVQQL
# EyRNaWNyb3NvZnQgSXJlbGFuZCBPcGVyYXRpb25zIExpbWl0ZWQxJjAkBgNVBAsT
# HVRoYWxlcyBUU1MgRVNOOkUwNDEtNEJFRS1GQTdFMSUwIwYDVQQDExxNaWNyb3Nv
# ZnQgVGltZS1TdGFtcCBTZXJ2aWNloIIOTTCCBPkwggPhoAMCAQICEzMAAAE3QY9D
# 51pbb6cAAAAAATcwDQYJKoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNV
# BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
# c29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
# UENBIDIwMTAwHhcNMjAxMDE1MTcyODE0WhcNMjIwMTEyMTcyODE0WjCB0jELMAkG
# A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
# HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9z
# b2Z0IElyZWxhbmQgT3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMg
# VFNTIEVTTjpFMDQxLTRCRUUtRkE3RTElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUt
# U3RhbXAgU2VydmljZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMQR
# 7mnRJZtxubYpIU840gwdPvbF5lIVMg1UY9GOL8/a2fbMpDaGy+f+gLeczpHgdm5f
# SF71Xckv2STWU9+95J860N+O899DJsO/vlVPwhPuMeMPZG+W6kB30s2yULeiplrL
# jJiS84OEeTHibOTGOWHTy8aDKA0XE4v/yqDBUdCs0tf99uA9v+CpBw9V7frNMWNA
# yAlDitUW5iQihIAT9fxg2Y7mUAUvQ4vPck57yyVfi69ULa4h+BKpkaAHZld8ydBi
# bK+b4Rj5inzjwkUpO0PIoF+4KBZwi86WHHxxgqqEf5sPeYH0KcMplcMWQdD5BjK0
# MPiylT2vxRz+AuCjvkECAwEAAaOCARswggEXMB0GA1UdDgQWBBQNYLBzDPrnYGO6
# xJ3uujss8ZRPZTAfBgNVHSMEGDAWgBTVYzpcijGQ80N7fEYbxTNoWoVtVTBWBgNV
# HR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9w
# cm9kdWN0cy9NaWNUaW1TdGFQQ0FfMjAxMC0wNy0wMS5jcmwwWgYIKwYBBQUHAQEE
# TjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpL2Nl
# cnRzL01pY1RpbVN0YVBDQV8yMDEwLTA3LTAxLmNydDAMBgNVHRMBAf8EAjAAMBMG
# A1UdJQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEBCwUAA4IBAQCd9lPXfdEVbgFG
# /TbJ1wRtSuNqo4VPox78AXW4qSHF+FoO3R+WXbkGY94FoCgA2ec/k3oV+xpwW4tu
# uVSO8Q0bBXtgo5E5uCSKIrHSsGAQ67kvmEUQRuAdREbloueFxsMfpUgPokDayIui
# ZtAi/zH0C78LKjyUhj+vThBwsmhMaLOPOvl9yU7hlddQgZfwTu6/FB28f6xOn2a5
# WWWGmyBemnmob0y9eC72S1f2zM2Ejg7G4xx7E5vUGhptYo4WoAnW5AKq/PuxwIGB
# Gq/Fz5c8VIVSOEoVQeWRnfYGdsgZMMXQNKBXO+OU3Tj62z+/b3dHj6oLyQx+bZDo
# U0TSOeV0MIIGcTCCBFmgAwIBAgIKYQmBKgAAAAAAAjANBgkqhkiG9w0BAQsFADCB
# iDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
# ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEyMDAGA1UEAxMp
# TWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5IDIwMTAwHhcNMTAw
# NzAxMjEzNjU1WhcNMjUwNzAxMjE0NjU1WjB8MQswCQYDVQQGEwJVUzETMBEGA1UE
# CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
# b2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQ
# Q0EgMjAxMDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKkdDbx3EYo6
# IOz8E5f1+n9plGt0VBDVpQoAgoX77XxoSyxfxcPlYcJ2tz5mK1vwFVMnBDEfQRsa
# lR3OCROOfGEwWbEwRA/xYIiEVEMM1024OAizQt2TrNZzMFcmgqNFDdDq9UeBzb8k
# YDJYYEbyWEeGMoQedGFnkV+BVLHPk0ySwcSmXdFhE24oxhr5hoC732H8RsEnHSRn
# EnIaIYqvS2SJUGKxXf13Hz3wV3WsvYpCTUBR0Q+cBj5nf/VmwAOWRH7v0Ev9buWa
# yrGo8noqCjHw2k4GkbaICDXoeByw6ZnNPOcvRLqn9NxkvaQBwSAJk3jN/LzAyURd
# XhacAQVPIk0CAwEAAaOCAeYwggHiMBAGCSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQW
# BBTVYzpcijGQ80N7fEYbxTNoWoVtVTAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMA
# QTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBTV9lbL
# j+iiXGJo0T2UkFvXzpoYxDBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1p
# Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAxMC0w
# Ni0yMy5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3
# Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIz
# LmNydDCBoAYDVR0gAQH/BIGVMIGSMIGPBgkrBgEEAYI3LgMwgYEwPQYIKwYBBQUH
# AgEWMWh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9QS0kvZG9jcy9DUFMvZGVmYXVs
# dC5odG0wQAYIKwYBBQUHAgIwNB4yIB0ATABlAGcAYQBsAF8AUABvAGwAaQBjAHkA
# XwBTAHQAYQB0AGUAbQBlAG4AdAAuIB0wDQYJKoZIhvcNAQELBQADggIBAAfmiFEN
# 4sbgmD+BcQM9naOhIW+z66bM9TG+zwXiqf76V20ZMLPCxWbJat/15/B4vceoniXj
# +bzta1RXCCtRgkQS+7lTjMz0YBKKdsxAQEGb3FwX/1z5Xhc1mCRWS3TvQhDIr79/
# xn/yN31aPxzymXlKkVIArzgPF/UveYFl2am1a+THzvbKegBvSzBEJCI8z+0DpZaP
# WSm8tv0E4XCfMkon/VWvL/625Y4zu2JfmttXQOnxzplmkIz/amJ/3cVKC5Em4jns
# GUpxY517IW3DnKOiPPp/fZZqkHimbdLhnPkd/DjYlPTGpQqWhqS9nhquBEKDuLWA
# myI4ILUl5WTs9/S/fmNZJQ96LjlXdqJxqgaKD4kWumGnEcua2A5HmoDF0M2n0O99
# g/DhO3EJ3110mCIIYdqwUB5vvfHhAN/nMQekkzr3ZUd46PioSKv33nJ+YWtvd6mB
# y6cJrDm77MbL2IK0cs0d9LiFAR6A+xuJKlQ5slvayA1VmXqHczsI5pgt6o3gMy4S
# KfXAL1QnIffIrE7aKLixqduWsqdCosnPGUFN4Ib5KpqjEWYw07t0MkvfY3v1mYov
# G8chr1m1rtxEPJdQcdeh0sVV42neV8HR3jDA/czmTfsNv11P6Z0eGTgvvM9YBS7v
# DaBQNdrvCScc1bN+NR4Iuto229Nfj950iEkSoYIC1zCCAkACAQEwggEAoYHYpIHV
# MIHSMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
# UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMS0wKwYDVQQL
# EyRNaWNyb3NvZnQgSXJlbGFuZCBPcGVyYXRpb25zIExpbWl0ZWQxJjAkBgNVBAsT
# HVRoYWxlcyBUU1MgRVNOOkUwNDEtNEJFRS1GQTdFMSUwIwYDVQQDExxNaWNyb3Nv
# ZnQgVGltZS1TdGFtcCBTZXJ2aWNloiMKAQEwBwYFKw4DAhoDFQDqu6g5OIlc/CE7
# mW1BawBu3nManKCBgzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
# aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
# cG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
# MA0GCSqGSIb3DQEBBQUAAgUA5H2m1TAiGA8yMDIxMDYyMzIwMjU1N1oYDzIwMjEw
# NjI0MjAyNTU3WjB3MD0GCisGAQQBhFkKBAExLzAtMAoCBQDkfabVAgEAMAoCAQAC
# AiFxAgH/MAcCAQACAhIEMAoCBQDkfvhVAgEAMDYGCisGAQQBhFkKBAIxKDAmMAwG
# CisGAQQBhFkKAwKgCjAIAgEAAgMHoSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEF
# BQADgYEAMFOjz9Am7hrbG/7+yfQ+EbLiUt5kRZoMcQOb0vr4DmXPMBqeUCngpaXA
# jOPqbgxH9QqxVzG8XEXvP0GTTuo7QVrmS+oDxXkMOl4IPEZkvs+NyUr49Z19U/Oq
# sHd8J1oNRylfabu5PNhMVYc2hzsL/jwIHXyUIDnwIls3B6VBhakxggMNMIIDCQIB
# ATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
# BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYD
# VQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAATdBj0PnWltv
# pwAAAAABNzANBglghkgBZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
# DQEJEAEEMC8GCSqGSIb3DQEJBDEiBCCzMzgPrJE2ggsWkEG4lQqcLQiaEDARfHmQ
# aUBCX94q7jCB+gYLKoZIhvcNAQkQAi8xgeowgecwgeQwgb0EIB1Zfq/AngSdIsl/
# 2hmQ9mG0O4JPlOzewUIkwygGEhwQMIGYMIGApH4wfDELMAkGA1UEBhMCVVMxEzAR
# BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
# Y3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
# bXAgUENBIDIwMTACEzMAAAE3QY9D51pbb6cAAAAAATcwIgQglNjzESs8L8g1T5AY
# 1UgdpLEKMQ+g33a4OqHVDVP953MwDQYJKoZIhvcNAQELBQAEggEAYAR5mv6Ln7xg
# eSP5sOuOU7gkNeLo2f3ak9plcFenbUWZfafQavIC/10HCvicyO14/1ze+F5NzVgD
# s1MbDrqI2a9SMwXouASQ9BSZ0yu9phgXAe0ZfJK9JWKFUJttuWKX9hC+ggEsMUOL
# eYnDsq1t8LGR9cKC//fSb+pjT7xNeK8UzUZ7osEueyTE5Zms7BYGjzfL6cpCukMZ
# Dm1bl2oUTJ/lD/QnIVMk1Zb50CRbXqcKB2tgFtPXB4bvXDAlQnvcIvLMU18Jsp0A
# HmTs4TttSG8QWgn1nCIvIOyRlrXsSkY/SHAT333JGOh8Cz66/86Ugc+u/PyQchuC
# 5o7L5rHYng==
# SIG # End signature block

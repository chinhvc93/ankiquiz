param(
     [Parameter()]
     [string]$FolderName = $( Read-Host "Input folder name, please" )
    #  ,
 )

# Config ######################################################
# $folder="D:\projects-private\anki_quizlet\html_templates\tools"
# $folder="./"
$folder="./"
if ($FolderName) {
    $folder=$FolderName
}
Write-Output "Custom FolderName: $folder"

$folderIn="$folder"
$folderOut="$folder/output"
$combineOutputFile="$folderOut/combine-all.txt"
###############################################################

#
# Function: Cut text, replace text in file
#
Function CutReplaceTextInfile([string]$filename)
{
    $fileIn="$folderIn/$filename"
    $fileOut="$folderOut/$filename"

    $fromLineText="<!--Full width header End-->"
    $lineFrom= Get-Content $fileIn | select-string $fromLineText
    $lineFrom = $lineFrom.LineNumber + 1

    $toLineText="<!-- Footer Start -->"
    $lineTo= Get-Content $fileIn | select-string $toLineText
    $lineTo = $lineTo.LineNumber - 2

    (Get-Content $fileIn)[$lineFrom..$lineTo] > $fileOut

    # Replace
    (Get-Content $fileOut -Raw).Replace("=`r`n","").replace('3D"', '"').replace('=3D', '').replace('=20', '').replace('=E2=9C=91', '- ').replace('=D7=92=E2=82=AC', '"').replace("=E2=80=99", "'").replace("=E2=80=A2", '-') | Set-Content $fileOut
}

#
# Function: Cut Multiple Files In Folder
#
Function CutMultipleFileInFolder([string]$folderPath)
{
   Write-Output "*** [Start] Cut Multile Files ***"
    
    $ToNatural= { [regex]::Replace($_, '\d+',{$args[0].Value.Padleft(20)})}
    Get-ChildItem $folderPath -Filter *.mhtml | Sort-Object  $ToNatural |
    Foreach-Object {
        $filename = $_.Name
        $currentDate = Get-Date -Format "yyyy/MM/dd HH:mm:ss"
       Write-Output "- [$currentDate] Filename: $filename"
        CutReplaceTextInfile $filename
    }

   Write-Output "*** [Done] Cut Multile Files ***"
}

#
# Function: Combile All File's Content In Folder
#
Function CombineAllContentFile([string]$folderPath, [string]$outputFilename)
{
   Write-Output "*** [Start] Merge All Files ***"
    $currentDate = Get-Date -Format "yyyy/MM/dd HH:mm:ss"
   Write-Output "- [$currentDate] Output file: $folderPath\combine-all.txt"
    
    $ToNatural= { [regex]::Replace($_, '\d+',{$args[0].Value.Padleft(20)})}
    Get-ChildItem $folderPath -include *.mhtml -rec | Sort-Object  $ToNatural | ForEach-Object {gc $_; ""} | out-file $outputFilename

   Write-Output "*** [Done] Merge All Files ***"
}

# MAIN #########################################################
# Run single file
# $filename="Exam AWS Certified Database - Specialty topic 1 question 1 discussion - ExamTopics.mhtml"
# # CutReplaceTextInfile $filename

If(test-path -PathType container $folderIn)
{
    # Create folder output
    If(!(test-path -PathType container $folderOut))
    {
        Write-Output "Create folder output"
        New-Item -ItemType Directory -Path $folderOut
    }

    # Run multifile
    CutMultipleFileInFolder $folderIn

    # Merge all file to one
    CombineAllContentFile $folderOut $combineOutputFile
} Else {
   Write-Output "[Error] Folder ($folderIn) not existed !!!!!"
    Start-Sleep 5
}

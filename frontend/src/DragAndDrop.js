import React, { useState } from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  dropzone: {
    border: '2px dashed #ccc',
    borderRadius: '5px',
    padding: '20px',
    cursor: 'pointer',
  },
}));

function DragAndDrop() {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'application/json',
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  const handleAnalysis = () => {
    // Placeholder for data analysis logic
    console.log('Analyzing files:', files);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">Drag and Drop Data Analysis</Typography>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <Typography>Drag & drop some files here, or click to select files</Typography>
      </div>
      <Button variant="contained" color="primary" onClick={handleAnalysis} disabled={files.length === 0}>
        Analyze Data
      </Button>
    </Paper>
  );
}

export default DragAndDrop;
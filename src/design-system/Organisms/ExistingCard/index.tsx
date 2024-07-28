'use client'
import { Button, CustomInput, Typography } from '@/design-system/Atoms';
import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react';

const ExistingCard: React.FC = () => {
    const [familyCode, setFamilyCode] = useState(''); // State to manage family code input
    

      const handleFamilyCodeChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setFamilyCode(event.target.value); // Update state when input value changes
        },
        [],
      );
    
     const handleSubmit = useCallback(() => {
       console.log('Family Code:', familyCode); // Handle form submission
     }, [familyCode]);


  return (
    <>
      <Box p={10}>
        <Box>
          <CustomInput
            label="Enter family code"
            placeholder="Enter family code"
            value={familyCode} // Bind input value to state
            onChange={handleFamilyCodeChange} // Handle input change
            // className={styles.inputField}
            fullWidth
          />
        </Box>
        <Box mt={3}>
          <Button fullWidth type="submit" onClick={handleSubmit}>
            <Typography size="btn">Join existing family</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ExistingCard;

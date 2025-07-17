import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&::before': {
        display: 'none',
    },
    '&:not(:last-child)': {
        marginBottom: 16,
    },
    border: '1px solid #E8E8E8',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    '&.Mui-expanded': {
        margin: '0 0 16px 0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ color: 'primary.main', fontSize: 18 }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '12px 16px',
    minHeight: '56px',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 0,
        marginRight: 12,
    },
    '&:hover': {
        backgroundColor: '#f8f9fa',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '0 16px 16px 16px',
    borderTop: '1px solid #f0f0f0',
}));

export default function CustomizedAccordions({ data }) {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {data.map((item, index) => (
                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                        <Typography
                            sx={{
                                fontSize: { xs: '14px', md: '16px' },
                                fontWeight: 600,
                                color: '#1B3C74',
                                lineHeight: 1.3
                            }}
                        >
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                fontSize: { xs: '13px', md: '14px' },
                                color: '#77829D',
                                lineHeight: 1.6
                            }}
                        >
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
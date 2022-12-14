import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
 <section>
    {title && <h2>{title}</h2>}

   <ul> 
    {stats.map(({id, label, percentage}) => (
         <li key={id}>
            <span>{label }</span>
            <span>{percentage }</span>
      </li>
     )) }
    </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object.isRequired)
}